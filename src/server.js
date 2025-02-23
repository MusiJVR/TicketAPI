const express = require('express');
require('dotenv').config();
const { testConnection } = require('./database');
const { syncDatabase } = require('./models/index');

const ticketsRoutes = require('./routes/ticketsRoutes');

const app = express();
    
app.use(express.json());
    
app.use('/tickets', ticketsRoutes);

async function initializeDatabase() {
    try {
        await testConnection();
        await syncDatabase();
    } catch (error) {
        console.error('Database initialization error:', error);
        process.exit(1);
    }
}

module.exports = { app, initializeDatabase };
