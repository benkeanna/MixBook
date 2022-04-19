const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

router.get("/home", (req, res) => {
  res.json({ message: "Hello from HOME!" });
});

module.exports = router;
