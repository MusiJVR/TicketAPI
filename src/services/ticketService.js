const Ticket = require('../models/ticket');

class TicketService {
    static async createTicket({ title, description }) {
        return await Ticket.create({ title, description });
    }

    static async getTickets() {
        return await Ticket.findAll();
    }
}

module.exports = TicketService;
