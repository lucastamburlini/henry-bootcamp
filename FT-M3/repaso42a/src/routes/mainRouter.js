const {Router} = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
} = require("../handlers/index");

const mainRouter = Router();

mainRouter.get("/users", getAllUsers);

mainRouter.get("/users/:id", getUserById);

mainRouter.post("/users", createUser);

mainRouter.put("/users/:id", updateUser);

module.exports = mainRouter;
