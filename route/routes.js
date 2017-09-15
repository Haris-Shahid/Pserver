const patient = require('../models/patientSchema')

module.exports = (app) => {
  app.post('/api/patientdetails', (req, res, next) => {
    var userData = req.body;
        console.log(userData)
    patient.create(userData)
        .then((responce) => {
            res.send(responce)
        })
        .catch(next)
})

  app.get('/api/getAllPatient', (req, res, next) => {
    patient.find({})
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch(next)
})
}

