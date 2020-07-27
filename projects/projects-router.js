const express = require("express");
const projectsModel = require("./projects-model");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    const allProjects = await projectsModel.find();
    res.status(200).json(allProjects);
  } catch (err) {
    res.json({ message: "Could not retrieve list of projects" });
    next(err);
  }
});

router.get("/:userId/projects", async (req, res, next) => {
  const { id } = req.params.userId;

  projectsModel
    .findProjects(id)
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
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:userId/projects/:id", (req, res, next) => {});

router.post("/:userId/projects", (req, res, next) => {});

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
    res
      .status(200)
      .json({ message: "Successfully updated project!" }, updatedProject);
  } catch (err) {
    next(err);
  }
});

router.delete("/:userId/projects/:id", (req, res, next) => {});

module.exports = router;
