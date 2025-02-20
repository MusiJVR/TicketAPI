const express = require('express');

function startServer() {
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    app.use(express.json());
    
    app.get('/ticket', (req, res) => {
        res.send('ticket');
    });

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = { startServer };
