const express = require("express");
const projectsModel = require("./projects-model");

const router = express.Router();

//GET ALL PROJECTS
router.get("/projects", async (req, res, next) => {
  try {
    const allProjects = await projectsModel.find();
    res.status(200).json(allProjects);
  } catch (err) {
    res.json({ message: "Could not retrieve list of projects" });
    next(err);
  }
});

//GET PROJECTS FOR SPECIFIC USER
router.get("/:userId/projects", async (req, res, next) => {
  const { userId } = req.params;

  projectsModel
    .findProjects(userId)
    .then((projects) => {
      if (projects.length) {
        res.json(projects);
      } else {
        res
          .status(404)
          .json({ message: "Could not find projects for given user" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get projects" });
    });
});

//ADD PROJECT
// router.post("/:userId/projects", async (req, res, next) => {
//   const getUserId = {
//     user_id: req.params.userId,
//     ...req.body,
//   };
//   try {
//     const newProject = await projectsModel.add(getUserId);
//     res.status(201).json(getUserId);
//   } catch (err) {
//     res.status(500).json({ error: "There was an error adding the project" });
//   }
// });

//UPDATE PROJECT
router.put("/:userId/projects/:id", async (req, res, next) => {
  const changes = {
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    goal_amount: req.body.goal_amount,
    amount_received: req.body.amount_received,
    funding_completed: req.body.funding_completed,
  };
  try {
    const updatedProject = await projectsModel.update(
      req.params.userId,
      req.params.id,
      changes
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    next(err);
  }
});

//DELETE PROJECT
router.delete("/projects/:id", (req, res, next) => {
  projectsModel
    .remove(req.params.id)
    .then(() => {
      res.json({
        message: "The project was removed successfully",
      });
    })
    .catch(next);
});

// CUSTOM MIDDLEWARE

// function validateUserId() {
//   return (req, res, next) => {
//     projectsModel
//       .getByUserId(req.params.id)
//       .then((user) => {
//         if (user) {
//           req.user = user;
//           next();
//         } else {
//           res.status(400).json({
//             message: "Invalid user id",
//           });
//         }
//       })
//       .catch(next);
//   };
// }

module.exports = router;
