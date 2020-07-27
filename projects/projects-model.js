const db = require("../database/config");

const update = (userId, id, changes) => {
  return db("projects")
    .where({
      user_id: userId,
      project_id: id,
    })
    .update(changes)
    .returning("*");
};

module.exports = {
  update,
};
