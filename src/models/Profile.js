const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('final', 'root', 'root', {
  dialect: 'mysql', // Change the dialect to MySQL
  host: 'localhost'
});

// Assuming the User model is exported correctly from './User'
const User = require('./User');

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  },
  department: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: true
  }
});
  
// Define the association between User and Profile
User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });
  
module.exports = Profile;
