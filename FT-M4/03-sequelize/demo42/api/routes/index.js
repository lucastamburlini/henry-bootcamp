const {Router} = require("express");
const {
  getById,
  getAllUsers,
  getGatito,
  createUser,
  getCharacterHp,
  coffeHandler,
  createPost,
  updateEmail,
  deleteUser,
} = require("../handlers/index");

const mainRouter = Router();

//RUTAS
mainRouter.get("/gatito", getGatito);
mainRouter.get("/users/:id", getById);
mainRouter.get("/users", getAllUsers);
mainRouter.post("/users", createUser);
mainRouter.post("/posts", createPost);
mainRouter.put("/users", updateEmail);
mainRouter.delete("/users", deleteUser);
mainRouter.get("/harry", getCharacterHp);
mainRouter.get("/cafe", coffeHandler);

module.exports = mainRouter;
