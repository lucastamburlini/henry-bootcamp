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
        set(value) {
          this.setDataValue("name", value.toLowerCase());
        },
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true, // hsadgf@sdf.com
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.INTEGER,
        len: [5, 10],
        defaultValue: 123456,
      },
      fechaNac: {
        type: DataTypes.DATE,
        defaultValue: new Date("1987-05-18"),
      },
      age: {
        type: DataTypes.VIRTUAL,
        get() {
          const hoy = new Date();
          const nacimiento = new Date(this.fechaNac);
          const calculo = hoy.getTime() - nacimiento.getTime();
          return Math.floor(calculo / (1000 * 60 * 60 * 24 * 365.25));
        },
      },
    },
    {timestamps: false}
  );
};
