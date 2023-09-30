import Todo from "../Models/ToDoModel.js";
import {body} from "express-validator";
import User from "../Models/UserModel.js";

class TodoController{
    async create(req,res){
        try {
            const {header, body} = req.body
            const todo = await Todo.create({
                header: header,
                body: body,
                creationdate: new Date()
            })

            res.json(todo)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try{
            const todo = await Todo.findAll()
            res.json(todo)
        }catch (e){
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try {
            const {id} = req.params
            const todo = await Todo.findOne({where: {id: id}})
            res.json(todo)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
        const {id} = req.params
        const {header, body, creationdate, userid} = req.body
        if (!id){
            res.status(400).json({message: "Id не указан"})
        }

        const todo = await Todo.findOne({where: { id: id}})
        await todo.update({
            header: header,
            body: body,
            creationdate: creationdate,
            userid: userid
        })
        res.json(todo)
    }catch (e){
        res.status(500).json(e)
    }}
    async delete(req,res){
        try{
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: "Id не указан"})
            }
            const todo = await Todo.findOne({where: { id: id}})
            await todo.delete({where: {id: id }})
            res.json(todo)
        }catch (e) {
            res.status(500).json(e)
        }
    }


}

export default new TodoController()