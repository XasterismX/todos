import {Router} from "express";
import User from "./Models/UserModel.js";
import UserControler from "./Controllers/UserController.js";
import TodoController from "./Controllers/TodoController.js";
import Todo from "./Models/ToDoModel.js";

const router = new Router()

router.get('/users/:id', UserControler.getOne);
router.get('/users', UserControler.getAll)
router.post('/users', UserControler.create);
router.put ('/users/:id', UserControler.update)
router.delete ('/users/:id', UserControler.delete)

router.get('/todo', TodoController.getAll)
router.get('/todo/:id', TodoController.getOne);
router.post('/todo', TodoController.create);
router.put ('/todo/:id', TodoController.update)
router.delete ('/todo/:id', TodoController.delete)

export default router;