const {getUsersFromApi, getByName} = require("../controller");

const getAllUsers = async (req, res) => {
  try {
    const {name} = req.query;
    if (name) {
      const user = await getByName(name);
      return res.status(200).send(user);
    }

    const users = await getUsersFromApi();

    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

const createUser = (req, res) => {
  const {name, email, phone} = req.body;

  res.status(200).json({name, email, phone});
};

const updateUser = (req, res) => {
  const {id} = req.params;
  const {newPhone} = req.body;

  // buscamos al usuario conel id (filter  o find)  userFound.phone = newPhone

  res
    .status(200)
    .send(
      `Se modifico al usuario ${id} ahora tiene el numero de telefono: ${newPhone}`
    );
};

const getUserById = (req, res) => {
  const {id} = req.params; // {id:id}
  res.status(200).send(`Este ese el id recibido por params: ${id}`);
};

module.exports = {getAllUsers, createUser, updateUser, getUserById};
