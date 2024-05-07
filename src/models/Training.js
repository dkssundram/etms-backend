// backend/src/models/Training.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});



const Training = sequelize.define('Training', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  trainingName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  trainingImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  trainingDescription: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  numberOfDaysAlloted: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Training;
