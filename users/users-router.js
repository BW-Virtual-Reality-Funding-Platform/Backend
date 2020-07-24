const express = require("express");
const usersModel = require("./users-model");

const router = express.Router();

router.get("/api/users", async (req, res, next) => {
  try {
    const getAllUsers = await usersModel.find();
    res.status(200).json(getAllUsers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
