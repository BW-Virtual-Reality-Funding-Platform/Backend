exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      project_id: 1,
      user_id: 1,
      title: "Escape From Tarkov",
      img_url:
        "https://images.dexerto.com/uploads/2020/06/29163703/escape-from-tarkov-battlestate-games-june-29-patch.jpg",
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
      img_url:
        "https://www.treyexgaming.com/wp-content/uploads/2019/08/word-19.png",
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
      img_url:
        "https://image-cdn.essentiallysports.com/wp-content/uploads/20200601234858/valorant-personajes-1.jpg",
      description:
        "The new and improved CSGO with all new cartoon characters for your LARPing needs",
      goal_amount: 2000000,
      amount_received: 150000,
      funding_completed: false,
    },
    {
      project_id: 4,
      user_id: 3,
      title: "Overwatch",
      img_url:
        "https://cdn1.dotesports.com/wp-content/uploads/2019/09/04100720/overwatch-1.jpg",
      description:
        "Overwatch, what's to say...it's team fortress 2 with a skin on it.",
      goal_amount: 1000000,
      amount_received: 1204397324,
      funding_completed: false,
    },
    {
      project_id: 5,
      user_id: 1,
      title: "Star Wars - Battlefront II",
      img_url:
        "https://media.contentapi.ea.com/content/dam/walrus/en-us/migrated-images/2017/04/reveal-swbf2-fb-meta-image-alt.png.adapt.crop191x100.1200w.png",
      description:
        "Do you like buying 1/10 of game? Do you like having 50% of the most likeable characters locked behind a paywall? EA has you covered with this remake of a remake.",
      goal_amount: 100000,
      amount_received: 200000000,
      funding_completed: false,
    },
    {
      project_id: 6,
      user_id: 1,
      title: "Runescape",
      img_url: "https://www.runescape.com/img/microsite/social-share-fb.jpg",
      description:
        "Sick of pokemon: crystal for gameboy color? Well runescape has you covered with their outdated 8 bit game.",
      goal_amount: 10,
      amount_received: 9.99,
      funding_completed: false,
    },
    {
      project_id: 7,
      user_id: 2,
      title: "Skate 4",
      img_url:
        "https://cdn3.whatculture.com/images/2018/06/3eec47493d526e20-1200x675.png",
      description:
        "Can you do a kickflip? Neither can 99% of the kids in middle school who say they can, so grab a bag of doritos and dad's last mountain dew and jump on to pretend.",
      goal_amount: 2000000,
      amount_received: 150000,
      funding_completed: false,
    },
  ]);
};
