// backend/src/models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});

const Role = require('./Role');
const User = require('./User');
const Profile = require('./Profile')
const Training = require('./Training');
const AssessmentPage = require('./AssessmentPage');

module.exports = { Role, User,Profile, Training, AssessmentPage };
