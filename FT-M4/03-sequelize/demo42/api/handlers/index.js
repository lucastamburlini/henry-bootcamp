const {default: axios} = require("axios");

const getById = (req, res) => {
  const {id} = req.params;
  res.status(200).send(`Detalle del usuario ${id}`);
};

const getAllUsers = (req, res) => {
  const {name, alias} = req.query;
  if (name) return res.status(200).send(`Recibi el nombre: ${name}`);

  res.status(200).send("Aqui estan los usuarios");
};

const getGatito = (req, res) => {
  const obj = {nombre: "Bartolomiau", raza: "gato"};
  res.status(200).send(obj);
};

const createUser = (req, res) => {
  const {email, password, username} = req.body;
  res
    .status(200)
    .send(`agregando al usuario: ${username} cn el correo: ${email}`);
};

const getCharacterHp = async (req, res) => {
  try {
    const response = await axios(
      "https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"
    );

    const hp = response.data;

    res.status(201).json({character: hp});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const coffeHandler = async (req, res) => {
  try {
    let cafe = await fetch("la ruta que prepara cafe");
    res.status(200).send(cafe);
  } catch (error) {
    res.status(418).json({error: error.message});
  }
};

module.exports = {
  getById,
  getAllUsers,
  getGatito,
  createUser,
  getCharacterHp,
  coffeHandler,
};
