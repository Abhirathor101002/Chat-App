const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();
router.post("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
