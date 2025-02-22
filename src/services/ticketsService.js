const Ticket = require('../models/ticket');
const { Op } = require('sequelize');

class TicketsService {
    static async createTicket({ title, description }) {
        return await Ticket.create({ title, description });
    }

    static async getTickets({ date, startDate, endDate }) {
        let whereFilter = {};

        if (date) {
            whereFilter.createdAt = {
                [Op.gte]: new Date(date + 'T00:00:00.000Z'),
                [Op.lt]: new Date(date + 'T23:59:59.999Z')
            }
        } else if (startDate && endDate) {
            if (new Date(startDate) > new Date(endDate)) {
                throw new Error('startDate must be less than endDate');
            }

            whereFilter.createdAt = {
                [Op.between]: [
                    new Date(startDate + 'T00:00:00.000Z'),
                    new Date(endDate + 'T23:59:59.999Z')
                ]
            }
        }

        return await Ticket.findAll({ where: whereFilter });
    }

    static async getTicketById(id) {
        return await Ticket.findByPk(id);
    }

    static async takeTicket(id) {
        const ticket = await Ticket.findByPk(id);

        if (ticket) {
            ticket.status = 'В работе';
            await ticket.save();
        }

        return ticket;
    }

    static async cancelTicket(id, { cancelReason }) {
        const ticket = await Ticket.findByPk(id);

        if (ticket) {
            ticket.status = 'Отменено';
            ticket.cancelReason = cancelReason;
            await ticket.save();
        }

        return ticket;
    }

    static async cancelAllInWorkTicket({ cancelReason }) {
        const [updatedCount] = await Ticket.update(
            { status: 'Отменено', cancelReason },
            { where: { status: 'В работе' } }
        );

        return updatedCount;
    }

    static async completeTicket(id, { solutionText }) {
        const ticket = await Ticket.findByPk(id);

        if (ticket) {
            ticket.status = 'Завершено';
            ticket.solutionText = solutionText;
            await ticket.save();
        }

        return ticket;
    }
}

module.exports = TicketsService;
