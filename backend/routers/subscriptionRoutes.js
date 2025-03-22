// routes/subscriptionRoutes.js
const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscriptionController");


router.post("/subscription", subscriptionController.createSubscriptionCard);


router.get("/subscription", subscriptionController.getSubscriptionCards);

module.exports = router;
