const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome into the API!",
  });
});

module.exports = router;
