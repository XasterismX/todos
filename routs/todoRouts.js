const Router = require('express')
const router = new Router()
const todoController = require('../Controllers/TodoController')

router.get('/all', todoController.getAll)
router.get('/',todoController.getOne)
router.post('/create',todoController.create)
router.post('/update',todoController.update)

module.exports = router