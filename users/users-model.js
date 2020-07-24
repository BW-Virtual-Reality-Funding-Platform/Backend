const db = require("../database/config");

function find() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}

function add(users) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => findById(id));
}

function remove(id) {
  return db("users").where({ id }).delete();
}

module.exports = {
  find,
  findById,
  add,
  remove,
};
