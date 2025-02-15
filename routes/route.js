const express = require("express");

const router = express.Router();
const { handleGeneratedURL, redirectURL, analytics } = require("../controller/urlController")

router.post("/", handleGeneratedURL);
router.get("/:shortId", redirectURL);
router.get("/analytics/:shortId", analytics);

module.exports = router;