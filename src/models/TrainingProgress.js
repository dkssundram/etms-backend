const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('final', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const TrainingProgress = sequelize.define('TrainingProgress', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    trainingId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { TrainingProgress };
