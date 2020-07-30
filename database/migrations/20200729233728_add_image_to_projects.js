exports.up = async function (knex) {
  await knex.schema.table("projects", (table) => {
    table.text("img_url");
  });
};

exports.down = async function (knex) {
  await knex.schema.table("projects");
  table.dropColumn("img_url");
};
