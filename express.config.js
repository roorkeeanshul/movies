const express = require('express')
const routes = require('./src/controller/')
const routerList = require('./src/controller/index')

const app = express();

app.use(async (req, res, next) => {

    res.setHeader("Content-Type", "application/json")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin,Content-Type,Accept,Authorization")

    next()
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', routes)
app.use('/', routerList)

module.exports = app;