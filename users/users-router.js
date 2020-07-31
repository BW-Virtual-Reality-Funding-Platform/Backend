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

// //GET ALL PROJECTS (USING USERS DATABASE AS INITIAL PASSTHROUGH)
// router.get("/:userId/projects", (req, res) => {
//   const { id } = req.params;
//   usersModel.getProjects(id)
//     .then((project) => {
//       if (project.length) {
//         res.json(project);
//       } else {
//         res.status(404).json({ message: "User has no projects" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to get plants" });
//     });
// });

//GET USER BY ID
router.get("/api/users/:userId", async (req, res, next) => {
  try {
    const getUser = await usersModel.findById(req.params.userId);
    res.status(200).json(getUser);
  } catch (err) {
    next(err);
  }
});

//ADD PROJECT
router.post("/:userId/projects", async (req, res) => {
  const { id } = req.params;
  const projectData = { ...req.body, user_id: id };
  try {
    const newProject = await usersModel.addProject(projectData);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: "There was an error adding the project" });
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

// //UPDATE PROJECT BY USER ID
// router.put("/")

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
