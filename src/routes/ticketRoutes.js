const ticketController = require('../controllers/ticketController');
const express = require('express');
const router = express.Router();

router.post('/', ticketController.createTicket);
router.get('/', ticketController.getTickets);

module.exports = router;
