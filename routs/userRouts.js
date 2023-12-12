const Router = require('express')
const router = new Router()
const userController = require('../Controllers/UserController')
const authMiddleware = require('../Middleware/authMiddleware')

router.post('/reg',userController.register)
router.post('/login',userController.login)
router.use('/auth',authMiddleware, userController.auth)


module.exports = router