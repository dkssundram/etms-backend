// backend/src/models/Assessment.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});

const User = require('./User');
const Training = require('./Training');

const Assessment = sequelize.define('Assessment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  trainingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Training,
      key: 'id'
    }
  },
  obtainedScore: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalScore: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Assessment;