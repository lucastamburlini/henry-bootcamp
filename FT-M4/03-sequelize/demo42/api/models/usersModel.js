const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID, // 324tyer-23dwr-234sdf-2345dsfd
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Es un algoritmo que genera UUIDs
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true, // hsadgf@sdf.com
        unique: true,
      },
      password: {
        type: DataTypes.INTEGER,
        len: [5, 10],
        defaultValue: 123456,
      },
    },
    {timestamps: false}
  );
};
