const express = require("express");
const router = express.Router();
const path = require("path");

// Handle GET request to /signup
router.get("/", (req, res) => {
  // Use 'path.join' to construct the absolute file path
  const filePath = path.join(__dirname, "public/signup.html");
  // Send the HTML file as the response
  res.sendFile(filePath);
});

// Handle POST request to /signup
router.post("/", (req, res) => {
  // Handle signup logic here
});

module.exports = router;
