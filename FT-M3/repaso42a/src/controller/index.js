const axios = require("axios");

const getUsersFromApi = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response);
  return response.data;
};

const getByName = async (name) => {
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");

  const found = data.filter((user) => user.name === name);

  return found;
};

module.exports = {getUsersFromApi, getByName};
