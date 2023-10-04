const Router = require("express");
const userRouter = require("./userRouts.js")
const todoRouter = require("./todoRouts.js")



const router = new Router()



router.use('/user', userRouter)
router.use('/todo', todoRouter)



module.exports = router;