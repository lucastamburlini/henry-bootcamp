const {User} = require("../db");

const createUserController = async (email, password) => {
  const response = await User.create({
    email,
    password,
  });

  return response;
};

module.exports = {createUserController};
