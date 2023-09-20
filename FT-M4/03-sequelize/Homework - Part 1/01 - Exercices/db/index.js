const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');
const { DB_PASSWORD } = process.env;

const db = new Sequelize(
   `postgres://user:${DB_PASSWORD}@localhost:5432/henrydatabase`,
   {
      logging: false,
   }
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
   ...db.models,
   db,
   Op,
};
