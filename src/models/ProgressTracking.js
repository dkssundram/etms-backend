// backend/src/models/ProgressTracking.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});

const User = require('./User');
const Training = require('./Training');

const ProgressTracking = sequelize.define('ProgressTracking', {
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
      key: 'trainingId'
    }
  },
  status: {
    type: DataTypes.ENUM('in progress', 'completed'),
    allowNull: false,
    defaultValue: 'in progress'
  }
});

module.exports = ProgressTracking;
