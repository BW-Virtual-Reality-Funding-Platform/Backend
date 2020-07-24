const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
const welcomeRouter = require("../welcome/welcome-router");
const usersRouter = require("../users/users-router");
// const projectsRouter = require("../projects/projects-router")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use(welcomeRouter);
server.use(usersRouter);
// server.use(projectsRouter);

module.exports = server;
