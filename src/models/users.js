const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    job: Sequelize.STRING,
    age: Sequelize.STRING,
    dateOfBirth: Sequelize.STRING,
    address: Sequelize.STRING,
    createdAt: { 
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    updatedAt: { 
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    }
});

module.exports = User;
