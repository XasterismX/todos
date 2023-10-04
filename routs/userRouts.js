const Router = require('express')
const router = new Router()
const userController = require('../Controllers/UserController')
const authMiddleware = require('../Middleware/authMiddleware')

router.post('/registration',userController.register)
router.post('/login',userController.login)
router.get('/auth',authMiddleware, userController.auth)


module.exports = router