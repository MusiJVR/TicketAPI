const express = require('express');
require('dotenv').config();
const { testConnection } = require('./database');
const { syncDatabase } = require('./models/index');

async function startServer() {
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    app.use(express.json());
    
    app.get('/ticket', (req, res) => {
        res.send('ticket');
    });

    await testConnection();
    await syncDatabase();

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = { startServer };
