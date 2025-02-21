const TicketController = require('../controllers/ticketController');
const express = require('express');
const router = express.Router();

router.post('/', TicketController.createTicket);
router.get('/', TicketController.getTickets);

module.exports = router;
