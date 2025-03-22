// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  try {
    // 1) Check if JWT cookie is present
    const token = req.cookies.token;

    if (token) {
      // ✅ We have a JWT token in cookies, use it
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("✅ Decoded token:", decoded);
      // Ex: decoded = { userId: "67d44acc1bdee5c049d5519e", iat: 123, exp: 1234 }

      req.user = decoded.userId;
      return next();
    }

    // 2) Fallback: if no JWT token, check if there's a user_id cookie
    const userIdFromCookie = req.cookies.user_id;
    if (userIdFromCookie) {
      console.log("✅ Using user_id from cookies:", userIdFromCookie);

      // Validate that userIdFromCookie is a valid MongoDB ObjectId string
      if (!mongoose.Types.ObjectId.isValid(userIdFromCookie)) {
        console.error(
          "❌ user_id cookie is not a valid ObjectId:",
          userIdFromCookie
        );
        return res.status(400).json({ message: "Invalid user ID in cookie" });
      }

      // Attach user ID from cookie
      req.user = userIdFromCookie;
      return next();
    }

    // 3) If neither token nor user_id
    console.error("❌ No token or user_id cookie found");
    return res.status(401).json({ message: "No token or user_id cookie" });
  } catch (error) {
    console.error("❌ Auth middleware error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
