const express = require('express');
require('dotenv').config();
const { testConnection } = require('./database');
const { syncDatabase } = require('./models/index');

const ticketRoutes = require('./routes/ticketRoutes');

async function startServer() {
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    app.use(express.json());
    
    app.use('/ticket', ticketRoutes);

    await testConnection();
    await syncDatabase();

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = { startServer };
