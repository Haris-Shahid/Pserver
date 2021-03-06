var express = require('express')
var app = express()
var routes = require("./route/routes")
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://patients:patients@ds119044.mlab.com:19044/haris_practice',
    {
        useMongoClient: true
    })

app.use(bodyParser.json())

routes(app)

app.use((err, req, res, next) => {

    console.log(err.message)

    res.send(err.message)
    next()
})


module.exports = app