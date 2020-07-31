const bcrypt = require("bcryptjs");
const hash = async (password) => bcrypt.hash(password, 3);

exports.seed = async function (knex) {
  await knex("users").truncate();
  await knex("users").insert([
    { username: "test1", password: `${await hash("test1")}` },
    { username: "test2", password: `${await hash("test2")}` },
    { username: "test3", password: `${await hash("test3")}` },
  ]);
};
