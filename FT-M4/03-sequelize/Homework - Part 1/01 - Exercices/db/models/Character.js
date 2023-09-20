const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code: {
         type: DataTypes.STRING(5),
         primaryKey: true,
      },
      name: {

      },
      age: {

      },
      race: {

      },
      hp: {

      },
      mana: {

      },
   },
      { timestamps: false });
};
