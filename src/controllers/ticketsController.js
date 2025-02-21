const TicketsService = require('../services/ticketsService');

class TicketsController {
    static async createTicket(req, res) {
        try {
            const { title, description } = req.body;
            const ticket = await TicketsService.createTicket({ title, description });
            res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({ error: 'Error creating request', details: error.message });
        }
    }

    static async getTickets(req, res) {
        try {
            const { date, startDate, endDate } = req.query;
            const tickets = await TicketsService.getTickets({ date, startDate, endDate });
            res.status(200).json(tickets);
        } catch (error) {
            res.status(500).json({ error: 'Error receiving requests', details: error.message });
        }
    }
}

module.exports = TicketsController;
