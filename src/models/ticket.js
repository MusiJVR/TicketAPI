const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Ticket = sequelize.define('Ticket', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Новое', 'В работе', 'Завершено', 'Отменено'),
        defaultValue: 'Новое',
    },
    solutionText: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    cancelReason: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Ticket;
