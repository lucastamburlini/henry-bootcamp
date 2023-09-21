const {default: axios} = require("axios");
const {User, Post} = require("../db");
// const {createUserController} = require("../controller/index");

const getById = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByPk(id, {
      include: {
        model: Post,
        attributes: ["title", "body"],
      },
    });

    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const updateEmail = async (req, res) => {
  try {
    const {email, newEmail} = req.body;
    await User.update({email: newEmail}, {where: {email: email}});

    res.status(200).json({success: "Se actualizo tu correo"});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getAllUsers = async (req, res) => {
  try {
    const {name} = req.query;
    if (name) {
      const users = await User.findOne({where: {name: name}});
      return res.status(200).send(users);
    }

    const users = await User.findAll({
      include: {
        model: Post,
      },
    });
    return res.status(200).send(users);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getGatito = (req, res) => {
  const obj = {nombre: "Bartolomiau", raza: "gato"};
  res.status(200).send(obj);
};

const deleteUser = async (req, res) => {
  try {
    const {email} = req.body;
    // Ejecutar al controler que crea usuarios
    await User.destroy({where: {email: email}});

    res.status(200).send("se elimino con exito");
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const createUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    // Ejecutar al controler que crea usuarios

    const user = await User.create({name, email, password});

    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const createPost = async (req, res) => {
  try {
    const {userId, title, body} = req.body;
    // creo el post
    const newPost = await Post.create({title, body});
    //lo relaciono con el usuario
    const post = await newPost.setUser(userId);

    res.status(200).send(post);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
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
  createPost,
  updateEmail,
  deleteUser,
};
