const TicketsController = require('../controllers/ticketsController');
const express = require('express');
const router = express.Router();

router.post('/', TicketsController.createTicket);
router.get('/', TicketsController.getTickets);
router.get('/:id', TicketsController.getTicketById);

module.exports = router;
