const ticketService = require('../services/ticketService');

class TicketController {
    static async createTicket(req, res) {
        try {
            const { title, description } = req.body;
            const ticket = await ticketService.createTicket({ title, description });
            res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({ error: 'Error creating request', details: error.message });
        }
    }

    static async getTickets(req, res) {
        try {
            const { date, startDate, endDate } = req.query;
            const tickets = await ticketService.getTickets({ date, startDate, endDate });
            res.status(200).json(tickets);
        } catch (error) {
            res.status(500).json({ error: 'Error receiving requests', details: error.message });
        }
    }
}

module.exports = TicketController;
