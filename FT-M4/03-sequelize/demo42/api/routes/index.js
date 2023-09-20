const {Router} = require("express");
const {
  getById,
  getAllUsers,
  getGatito,
  createUser,
  getCharacterHp,
  coffeHandler,
} = require("../handlers/index");

const mainRouter = Router();

//RUTAS
mainRouter.get("/gatito", getGatito);
mainRouter.get("/users/:id", getById);
mainRouter.get("/users", getAllUsers);
mainRouter.post("/users", createUser);
mainRouter.get("/harry", getCharacterHp);
mainRouter.get("/cafe", coffeHandler);

module.exports = mainRouter;
