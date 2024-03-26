const { Router } = require("express");
const UsersModel = require("./apps/models/Users");

const routes = new Router();

routes.get("/users", async (req, res) => {
  const allUsers = await UsersModel.findAll();
  res.send({ users: allUsers });
});

routes.get("/health", (req, res) => {
  return res.send({ message: "Connected with success!" });
});

module.exports = routes;
