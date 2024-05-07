const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});

const Training = require('./Training');

const AssessmentPage = sequelize.define('AssessmentPage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    trainingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Training,
        key: 'id'
      }
    },
    newques: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    option1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  module.exports = AssessmentPage;
  