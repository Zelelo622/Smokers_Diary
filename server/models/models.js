const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const { authenticate, model } = require('../db');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

module.exports = {
    User
}