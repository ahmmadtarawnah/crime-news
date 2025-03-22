const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/user");
const sendOtpEmail = require("../utils/sendOtpEmail");
require("dotenv").config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google login
const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ message: "Google token is required" });
    }

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub } = payload; // "sub" is the Google User ID

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user if not found
      user = new User({
        username: name,
        email: email,
        googleId: sub,
        isActivated: true,
      });

      await user.save();
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .json({ message: "Google login successful", token, user_id: user._id });
  } catch (error) {
    console.error("❌ Google login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Username, email, and password are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // Valid for 10 mins

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
      role: "user",
      isdeleted: false,
      isActivated: false,
    });

    await newUser.save();

    // Send OTP Email
    await sendOtpEmail(email, otp);

    res
      .status(200)
      .json({ message: "OTP sent successfully. Please check your email." });
  } catch (error) {
    console.error("❌ Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // ✅ Set token as an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true, // ❗ Prevent JavaScript access
      secure: false, // ❗ Set `true` in production with HTTPS
      sameSite: "Lax", // ❗ Prevent CSRF issues
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    console.log("✅ Token set in cookie:", token); // Debugging

    res
      .status(200)
      .json({ message: "Login successful", token, user_id: user._id });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};




// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ isdeleted: false }).select(
      "-password -otp -otpExpiry"
    );
    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(id).select("-password -otp -otpExpiry");

    if (!user || user.isdeleted) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Edit user details
const editUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(id);

    if (!user || user.isdeleted) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update only the fields that are provided
    if (updates.username) user.username = updates.username;
    if (updates.email) user.email = updates.email;
    if (updates.password) {
      user.password = await bcrypt.hash(updates.password, 10);
    }
    if (updates.profilePicture) user.profilePicture = updates.profilePicture;
    if (updates.role) user.role = updates.role;
    if (updates.isdeleted !== undefined) user.isdeleted = updates.isdeleted;
    if (updates.isActivated !== undefined)
      user.isActivated = updates.isActivated;
    if (updates.facebookId) user.facebookId = updates.facebookId;
    if (updates.googleId) user.googleId = updates.googleId;
    if (updates.otp) user.otp = updates.otp;
    if (updates.otpExpiry) user.otpExpiry = updates.otpExpiry;

    // Save updated user
    await user.save();

    // Exclude sensitive data before sending response
    const userResponse = user.toObject();
    delete userResponse.password;
    delete userResponse.otp;
    delete userResponse.otpExpiry;

    res
      .status(200)
      .json({ message: "User updated successfully", user: userResponse });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Soft delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(id);

    if (!user || user.isdeleted) {
      return res.status(404).json({ message: "User not found" });
    }

    // Soft delete the user
    user.isdeleted = true;
    await user.save();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Verify OTP
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if OTP matches
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Check if OTP is expired
    if (new Date() > user.otpExpiry) {
      return res
        .status(400)
        .json({ message: "OTP has expired. Request a new one." });
    }

    // Clear OTP fields after verification
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    res
      .status(200)
      .json({ message: "OTP verified successfully", token: "fake-jwt-token" });
  } catch (error) {
    console.error("❌ OTP verification error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getUserProfile = async (req, res) => {
  try {
    console.log("✅ ID from token or cookie:", req.user);

    if (!req.user || !mongoose.Types.ObjectId.isValid(req.user)) {
      console.error("❌ Invalid user ID:", req.user);
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findById(req.user).select("-password");
    if (!user) {
      console.error("❌ User not found:", req.user);
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ user, message: "User profile fetched successfully" });
  } catch (error) {
    console.error("❌ Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



/*
 try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }

*/ 





// Export all functions
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserProfile,
  verifyOtp,
  loginUser,
  googleLogin,
};
