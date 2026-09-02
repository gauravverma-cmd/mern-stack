const express = require("express");
const router = express.Router();
// 1. Import handleGetAnalytics here
const { handleGenerateNewShortUrl, handleGetAnalytics } = require("../controllers/url");

router.post("/", handleGenerateNewShortUrl);

// 2. Pass handleGetAnalytics as the second argument here
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;