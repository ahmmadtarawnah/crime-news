// models/SubscriptionCard.js
const mongoose = require("mongoose");

const SubscriptionCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  features: [{
    type: String,
  }],
}, { timestamps: true });

module.exports = mongoose.model("SubscriptionCard", SubscriptionCardSchema);
