const express = require('express')
const Appointment = require('../../models/appointment')
const mongoose = require('mongoose')
const router = express.Router()


router.get('/', async (req, res) => {

  try {

    const appointments = await Appointment.find().select('_id name email date time createdAt')

    const response = {
      count: appointments.length,
      appointments: appointments.map(app => {
        return {
          _id: app._id,
          name: app.name,
          email: app.email,
          date: app.date,
          time: app.time,
          createdAt: app.createdAt,
          request: {
            type: 'POST',
            description: 'Create one appointment.',
            url: `${process.env.HOST}/api/appointments`
          }
        }
      })
    }

    res.send(response)

  } catch(e) {
    res.status(500).send({ message: `${e}` })
  }

})

router.post('/', async (req, res) => {

  const { body: { name, email, date, time } } = req

  const model = new Appointment({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    date,
    time
  })

  try {

    const booking = await Appointment.find({ email })
    for (let i = 0; i < booking.length; i++) {
      if (booking[i].date === date && booking[i].time === time)
        return res.status(500).send({ message: 'You already have an appoitment at this time!' })
    }

    const doc = await model.save()

    if (!doc || doc.length === 0)
      return res.status(500).send({ message: 'Unable to save appointment.' })

    res.status(201).send({
      createdAppointment: {
        name: doc.name,
        email: doc.email,
        date: doc.date,
        time: doc.time,
        request: {
          type: 'GET',
          description: 'Retrieve all appointments.',
          url: `${process.env.HOST}/api/appointments`
        }
      }
    })

  } catch(e) {
    res.status(500).send({ message: `${e}` })
  }

})


module.exports = router
