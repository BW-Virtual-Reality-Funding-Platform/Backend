const supertest = require("supertest");
const server = require("../api/server");
const db = require("../database/config");

// // a global jest hook to run before each individual test
// beforeEach(async () => {
//   // re-run the seeds and start with a fresh database for each test
//   await db("users").truncate();
// });

afterAll(async () => {
  // closes the database connection after running all the tests,
  // so the jest command doesn't stall
  await db.destroy();
});

const user1 = {
  username: "secret user 1",
  password: "password",
};
const user2 = {
  username: "secret user 2",
  password: "password",
};

describe("integration tests", () => {
  //-------Registration-------
  it("POST /register - Receive status 201", async () => {
    const res = await supertest(server).post("/api/auth/register").send(user1);
    expect(res.statusCode).toBe(201);
  });

  //-------Login-------
  it("POST /login - Return status 200", async () => {
    const res1 = await supertest(server).post("/api/auth/register").send(user1);
    const res2 = await supertest(server).post("/api/auth/login").send(user1);
    expect(res2.statusCode).toBe(200);
  });
});
