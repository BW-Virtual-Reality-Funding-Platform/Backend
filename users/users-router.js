const express = require("express");
const usersModel = require("./users-model");

const router = express.Router();

// GET ALL USERS
router.get("/api/users", async (req, res, next) => {
  try {
    const getAllUsers = await usersModel.find();
    res.status(200).json(getAllUsers);
  } catch (err) {
    next(err);
  }
});

//GET USER BY ID
router.get("/api/users/:userId", async (req, res, next) => {
  try {
    const getUser = await usersModel.findById(req.params.userId);
    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
});

//UPDATE USER
router.put("/api/users/:userId", async (req, res, next) => {
  const toUpdate = {
    username: req.body.username,
    password: req.body.password,
  };
  try {
    const updates = await usersModel.update(req.params.userId, toUpdate);
    res.status(200).json(updates);
  } catch (err) {
    res.status(500).json({ message: "Failed to update user" });
    next(err);
  }
});

// DELETE USER
router.delete("/api/users/:userId", async (req, res, next) => {
  try {
    const deletedUser = await usersModel.remove(req.params.userId);

    if (deletedUser) {
      res.status(200).json({ message: "Oof, hope they weren't important" });
    } else {
      res.status(404).json({ message: "Could not find user with given id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user" });
    next(err);
  }
});

module.exports = router;
