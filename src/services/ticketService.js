const Ticket = require('../models/ticket');

class TicketService {
    async createTicket({ title, description }) {
        return await Ticket.create({ title, description });
    }

    async getTickets() {
        return await Ticket.findAll();
    }
}

module.exports = new TicketService();
