const express = require("express");
const projectsRouter = require("./projects-model");
const projectsModel = require("./projects-model");

const router = express.Router();

router.put("/:userId/projects/:id", (req, res, next) => {
    const changes = {
        user_id: req.body.user_id,
        title: req.body.title,
        description: req.body.description,
        goal_amount: req.body.goal_amount,
        amount_received: req.body.amount_received,
        funding_completed: req.body.funding_completed
    }
    try {
        const updatedProject = await projectsModel.update(req.params.userId, req.params.id, changes)
        res.status(200).json(updatedProject)
    } catch (err) {
        next(err)
    }
});

module.exports = router
