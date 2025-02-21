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
}

module.exports = TicketsService;
