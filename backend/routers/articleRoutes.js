const express = require("express");
const router = express.Router();
const { getArticles } = require("../controllers/articleController");

router.get("/get", getArticles);

module.exports = router;
