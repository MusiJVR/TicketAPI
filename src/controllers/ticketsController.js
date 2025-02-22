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

    static async getTicketById(req, res) {
        try {
            const ticket = await TicketsService.getTicketById(req.params.id);
            if (!ticket) {
                res.status(404).json({ message: 'Ticket not found' });
                return;
            }
            res.status(200).json(ticket);
        } catch (error) {
            res.status(500).json({ error: 'Error receiving requests', details: error.message });
        }
    }

    static async takeTicket(req, res) {
        try {
            const ticket = await TicketsService.takeTicket(req.params.id);
            if (!ticket) {
                res.status(404).json({ message: 'Ticket not found' });
                return;
            }
            res.status(200).json(ticket);
        } catch (error) {
            res.status(500).json({ error: 'Error receiving requests', details: error.message });
        }
    }

    static async cancelTicket(req, res) {
        try {
            const { cancelReason } = req.body;
            const ticket = await TicketsService.cancelTicket(req.params.id, { cancelReason });
            if (!ticket) {
                res.status(404).json({ message: 'Ticket not found' });
                return;
            }
            res.status(200).json(ticket);
        } catch (error) {
            res.status(500).json({ error: 'Error receiving requests', details: error.message });
        }
    }

    static async cancelAllInWorkTicket(req, res) {
        try {
            const { cancelReason } = req.body;
            const updatedCount = await TicketsService.cancelAllInWorkTicket({ cancelReason });
            res.status(200).json({ message: 'Tickets cancelled', count: updatedCount });
        } catch (error) {
            res.status(500).json({ error: 'Error receiving requests', details: error.message });
        }
    }
}

module.exports = TicketsController;
