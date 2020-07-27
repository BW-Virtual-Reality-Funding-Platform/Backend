const db = require("../database/config");

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

function remove(id) {
  return db("projects").where({ project_id: id }).del();
}

module.exports = {
  iDs,
  update,
  remove,
};
