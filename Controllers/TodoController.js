const ApiError =  require('../error/ApiError')
const {Todo, TodoList} = require('../Models/models')

class TodoController {
    async getAll(req, res, next){
        const todos = await Todo.findAll()
        if (!todos){
            return next(ApiError.badRequest('Нет записей'))
        }
        return res.json(todos)
    }
    async getOne(req, res, next){
        const {id} = req.query
        if(!id){
            return  next(ApiError.badRequest('Id не указан'))
        }
        const todo = await Todo.findOne({where: {id: id}})
        return res.json(todo)
    }
    async create(req, res, next){
        try{
            const {header, body, userId} = req.body
            if(!userId && body && header){
                return next(ApiError.badRequest('Введите все данные'))
            }
            const todo = await  Todo.create({header: header, body: body, creationdate: new Date(), userId: userId})
            await TodoList.update({todoListId: userId}, {where:{userId: userId}})
            return res.json(todo)
        }catch (e) {
            return next(ApiError.ithernal(e.message))
        }


    }
    async update(req, res, next){
        try {
            const {id} = req.query
            if(!id){
                return  next(ApiError.badRequest('Id не указан'))
            }
            const {header, body} = req.body
            const todo = await  Todo.update({header, body}, {where: {id: id}})
            return res.json({header, body})
        }catch (e) {
            return next(ApiError.ithernal("Непредвиденная ошибка!"))
        }


    }

}

module.exports = new TodoController()