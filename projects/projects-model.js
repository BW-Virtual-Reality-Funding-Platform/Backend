const db = require("../database/config");

function find() {
  return db("projects");
}

const iDs = async (userId, id) => {
  const project = await db("projects")
    .where({ user_id: userId, project_id: id })
    .first();
  return project;
};

const update = (userId, id, changes) => {
  return db("projects")
    .where({
      user_id: userId,
      project_id: id,
    })
    .update(changes);
};

function findProjects(id) {
  return db("projects")
    .innerJoin("users", "users.id", "projects.user_id")
    .select(
      "projects.title",
      "projects.description",
      "projects.goal_amount",
      "projects.amount_received",
      "projects.funding_completed",
      "users.username"
    )
    .where({ project_id: id });
}

function remove(id) {
  return db("projects").where({ project_id: id }).del();
}

module.exports = {
  find,
  iDs,
  findProjects,
  update,
  remove,
};
