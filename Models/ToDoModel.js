import sequelize from "../database.js";
import {DataTypes} from "sequelize";


const Todo = sequelize.define('todo',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    header: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creationdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userid: {
        type: DataTypes.INTEGER,
    }


})

Todo.sync({alter: true})



export default Todo