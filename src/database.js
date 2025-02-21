require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_NAME || 'database.sqlite',
    logging: false,
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

module.exports = { sequelize, testConnection };
