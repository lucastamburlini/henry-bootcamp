require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');
const { DB_PASSWORD, DB_USER, DB_HOST } = process.env;

const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henrydatabase`,
   {
      logging: false, native: false
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
