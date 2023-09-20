const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code: {
         type: DataTypes.STRING(5),
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         unique: true
      },
      age: {
         type: DataType.INTEGER,
      },
      race: {
         type: DataType.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
         defaultValue: "Other"
      },
      hp: {
         type: DataType.FLOAT,
         allowNull: false
      },
      mana: {
         type: DataType.FLOAT,
         allowNull: false
      },
   },
      { timestamps: false });
};
