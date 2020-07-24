exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      project_id: 1,
      user_id: 1,
      title: "Banana Sandwich",
      description:
        "Please help me fund my life long goal of never having to go without a banana sandwich",
      goal_amount: 5000,
      amount_received: 0,
      funding_completed: false,
    },
    {
      project_id: 2,
      user_id: 1,
      title: "VR for the kids",
      description:
        "Hello, I have an ambition to place VR stations in my local childrens hospital. I'm asking for $12000 to allow the kids to have a break from the hospital life",
      goal_amount: 12000,
      amount_received: 1000,
      funding_completed: false,
    },
    {
      project_id: 3,
      user_id: 2,
      title: "Tech college fund for the less fortunate",
      description:
        "My company is starting a fund for college age men and women who do not have the means to attend a school of their wishes, anything donated is greatly appreciated",
      goal_amount: 1500000,
      amount_received: 200000,
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
