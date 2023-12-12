const Router = require('express')
const router = new Router()
const todoController = require('../Controllers/TodoController')

router.get('/all', todoController.getAll)
router.get('/:id',todoController.getOne)
router.post('/create',todoController.create)
router.post('/update/:id',todoController.update)
router.delete('/delete/:id',todoController.delete)

module.exports = router