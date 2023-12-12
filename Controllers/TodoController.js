const ApiError =  require('../error/ApiError')
const {Todo, TodoList} = require('../Models/models')
const jwt = require('jsonwebtoken')


class TodoController {
    async getAll(req, res, next){
        try {

            const todos = await Todo.findAll()
            if (!todos || todos === null){
                return next(ApiError.badRequest('Нет записей'))
            }
            return res.json(todos)
        }catch (e) {
            console.log(e)
            return next(ApiError.ithernal("Ошибка"))
        }
    }

    async getOne(req, res, next){
        if (jwt.verify(req.cookies.access_token.split(' ')[1], process.env.SECRET_KEY)) {
            const userId = jwt.verify(req.cookies.access_token.split(' ')[1], process.env.SECRET_KEY).id
            const {id} = req.params
            if (!id) {
                return next(ApiError.badRequest('Id не указан'))
            }
            const todo = await Todo.findOne({where: {id: id, userId}})
            return res.json(todo)
        }
    }
    async create(req, res, next){
        try{
            if (jwt.verify(req.cookies.access_token.split(' ')[1], process.env.SECRET_KEY)) {
                const {id} = jwt.verify(req.cookies.access_token.split(' ')[1], process.env.SECRET_KEY)
                console.log(id)
                const {header, body} = req.body
                if (!body && header) {
                    return next(ApiError.badRequest('Введите все данные'))
                }
                const todo = await Todo.create({header: header, body: body, creationdate: new Date(), userId: id})
                return res.json(todo)
            }
        }catch (e) {
            return next(ApiError.ithernal(e.message))
        }


    }
    async update(req, res, next){
        try {
            if (jwt.verify(req.cookies.access_token.split(' ')[1], process.env.SECRET_KEY)) {
                const userId = jwt.verify(req.cookies.access_token.split(' ')[1], process.env.SECRET_KEY).id
                const {id} = req.params
                if (!id) {
                    return next(ApiError.badRequest('Id не указан'))
                }
                const {header, body} = req.body
                const todo = await Todo.update({header, body}, {where: {id: id, userId}})
                return res.json({header, body})
            }
        }catch (e) {
            return next(ApiError.ithernal("Непредвиденная ошибка!"))
        }


    }
    async delete(req,res,next){
        const {id} = req.params
        const deletedTodo = await Todo.destroy({where: {id}})
        return res.json(deletedTodo)
    }

}

module.exports = new TodoController()