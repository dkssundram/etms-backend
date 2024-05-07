const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});
const Training = require('./Training');

const ModuleDetails = sequelize.define('ModuleDetails', {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    videoLink: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

// Define the relationship between ModuleDetails and Training
ModuleDetails.belongsTo(Training, { foreignKey: 'trainingId' });

module.exports = ModuleDetails;
