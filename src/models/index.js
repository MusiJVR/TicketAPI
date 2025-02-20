const { sequelize } = require('../database');
const Ticket = require('./ticket');

async function syncDatabase() {
    await sequelize.sync({ alter: true });
    console.log('Database is synchronized');
}

module.exports = { Ticket, syncDatabase };
