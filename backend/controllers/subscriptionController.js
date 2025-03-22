// controllers/subscriptionController.js
const SubscriptionCard = require("../models/SubscriptionCard");


exports.createSubscriptionCard = async (req, res) => {
  try {
    const { title, description, price, duration, features } = req.body;
    const newCard = await SubscriptionCard.create({
      title,
      description,
      price,
      duration,
      features,
    });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: "Error creating subscription card", error });
  }
};


exports.getSubscriptionCards = async (req, res) => {
  try {
    const cards = await SubscriptionCard.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subscription cards", error });
  }
};
