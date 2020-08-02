const db = require("../database/config");

function find() {
  return db("users");
}

function getProjects(id) {
  return db("projects").where("user_id", id);
}

function findById(id) {
  return db("users").where({ id }).first();
}

function update(id, updates) {
  return db("users").where({ id }).update(updates);
}

function remove(id) {
  return db("users").where({ id }).del();
}

module.exports = {
  find,
  findById,
  getProjects,
  update,
  remove,
};
