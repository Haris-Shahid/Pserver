var mongoose = require('mongoose')
var Schema = mongoose.Schema


var patientSchema = new Schema({
    pname: String,
    age: Number,
    disease: String ,
    gender: String ,
    pmedicine: String ,
    date: String ,
    cost: Number
})

const patient = mongoose.model('patient', patientSchema)

module.exports = patient