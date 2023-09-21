const {Sequelize} = require("sequelize");
const UsersModel = require("./models/usersModel");
const PostModel = require("./models/postsModel");

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const sequelize = new Sequelize(
  "postgres://user:pass@example.com:5432/dbname",
  {logging: false}
);

UsersModel(sequelize);
PostModel(sequelize);

// RELACIONES O ASOCIACIONES

const {User, Post} = sequelize.models;

// Un usuario puede hacer muchos Posts
User.hasMany(Post);
// Un Post pertence a un solo Usuario
Post.belongsTo(User);

module.exports = {
  ...sequelize.models,
  sequelize,
};
