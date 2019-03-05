const moment = require('moment')
const { Op } = require('sequelize')
const { User, Appointment } = require('../models')

class DashboardController {
  async index (req, res) {
    const { user } = req.session

    if (!user.provider) {
      const providers = await User.findAll({ where: { provider: true } })

      return res.render('dashboard/dashboard', { providers })
    }

    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        provider_id: user.id,
        date: {
          [Op.between]: [
            moment()
              .startOf('day')
              .format(),
            moment()
              .endOf('day')
              .format()
          ]
        }
      }
    })

    return res.render('dashboard/provider', { appointments })
  }
}

module.exports = new DashboardController()
