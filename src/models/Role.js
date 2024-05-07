// backend/src/models/Role.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

User.belongsTo(Role, { foreignKey: 'roleId' });;

module.exports = Role;
