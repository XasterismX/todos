const sequelize =require("../database.js")
const {DataTypes} = require("sequelize")


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
    }


})

const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },


})
const TodoList = sequelize.define('todo_list', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
})
User.hasOne(TodoList)
TodoList.belongsTo(User)

User.hasOne(TodoList)
TodoList.belongsTo(User)

User.hasMany(Todo)
Todo.belongsTo(User)

TodoList.hasMany(Todo)
Todo.belongsTo(TodoList)

module.exports = {
    User,
    Todo,
    TodoList
}



