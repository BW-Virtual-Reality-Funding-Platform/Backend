exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      project_id: 1,
      user_id: 1,
      title: "Escape From Tarkov",
      description:
        "A competetive FPS game not meant for the light hearted. Please drink your red bull before starting the game",
      goal_amount: 60000000,
      amount_received: 15000000,
      funding_completed: false,
    },
    {
      project_id: 2,
      user_id: 1,
      title: "Counter Strike : Global Offensive (CSGO)",
      description:
        "The go to FPS for most. This game can be run on a potato, hot pocket or whatever you have left in the pantry",
      goal_amount: 10,
      amount_received: 1000000000,
      funding_completed: true,
    },
    {
      project_id: 3,
      user_id: 2,
      title: "Valorant",
      description:
        "The new and improved CSGO with all new cartoon characters for your LARPing needs",
      goal_amount: 2000000,
      amount_received: 150000,
      funding_completed: false,
    },
    {
      project_id: 4,
      user_id: 3,
      title: "Freeloader",
      description:
        "Please help my less than helpful, entitled, clumsy roommate get his own PC and instant noodles",
      goal_amount: 1200,
      amount_received: 1,
      funding_completed: false,
    },
  ]);
};
