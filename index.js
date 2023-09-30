import express from 'express'
import config from 'dotenv'
import sequelize from "./database.js";
import router from "./router.js";

const app = express()
const port = 3333

app.set('view engine', 'pug')
app.use(express.json())

app.use('/api', router)


async function startApp(){
    try {
        await sequelize.authenticate()
        app.listen(port, () => {
            console.log(`Сервер запущен на ${port}`)
        })
    }catch (e){
        console.log(e)
    }
}
startApp()
