// backend/src/models/User.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

const Role = require('./Role');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
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

User.belongsTo(Role, { foreignKey: 'roleId' });

module.exports = User;
