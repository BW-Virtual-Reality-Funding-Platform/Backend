const express = require("express");
const projectsModel = require("./projects-model");

const router = express.Router();

router.get("/:userId/projects", async (req, res, next) => {
  try {
    const getProjectsByUserID = await projectsModel.iDs(
      req.params.userId,
      req.params.id
    );
    res.status(200).json(getProjectsByUserID);
  } catch (err) {
    next(err);
  }
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
    res.status(200).json(updatedProject);
  } catch (err) {
    next(err);
  }
});

router.delete("/:userId/projects/:id", (req, res, next) => {});

module.exports = router;
