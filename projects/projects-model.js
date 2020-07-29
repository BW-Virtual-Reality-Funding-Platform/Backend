const db = require("../database/config");

function find() {
  return db("projects");
}

const iDs = async (userId, id) => {
  const project = await db("projects").where({
    user_id: userId,
    project_id: id,
  });
  return project;
};

function getByUserId(id) {
  return db("users").where({ id }).first();
}

const update = (userId, id, changes) => {
  return db("projects")
    .where({
      user_id: userId,
      project_id: id,
    })
    .update(changes);
};

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => getByUserId(id));
}

function findProjects(id) {
  return db("projects as p")
    .select(
      "u.id as user_id",
      "p.title",
      "p.description",
      "p.goal_amount",
      "p.amount_received",
      "p.funding_completed"
    )
    .join("users as u", "p.user_id", "u.id")
    .where("p.user_id", id);
}

function remove(id) {
  return db("projects").where({ project_id: id }).del();
}

module.exports = {
  find,
  iDs,
  getByUserId,
  findProjects,
  update,
  add,
  remove,
};
