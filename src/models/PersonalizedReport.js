// backend/src/models/PersonalizedReport.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});

const User = require('./User');

const PersonalizedReport = sequelize.define('PersonalizedReport', {
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
  performanceSummary: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  recommendations: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = PersonalizedReport;
