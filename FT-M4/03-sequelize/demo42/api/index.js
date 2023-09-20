const {sequelize} = require("./db.js");
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/index");
const server = express();

// http://localhost:3001
server.listen(3001, () => {
  sequelize.sync({force: true});
  console.log(`Servidor iniciado en el puerto 3001`);
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json()); // traducir de json a obj js
server.use(morgan("dev")); // hacer un log de la request

server.use(mainRouter);

module.exports = server;
