const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const sequelize = require("./database.js")
const router = require("./routs/router")
const models = require('./Models/models')
const cookieParser = require("cookie-parser");
const cors = require("cors")
const error = require('./Middleware/ErrorMiddlewereHandler')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(cors())
app.use('/api', router)

app.use(error)

async function startApp(){
    try {
        await sequelize.authenticate()
        await sequelize.sync({alter: true})
        app.listen(port, () => {
            console.log(`Сервер запущен на ${port}`)
        })
    }catch (e){
        console.log(e)
    }
}
startApp()
