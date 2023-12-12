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




User.hasMany(Todo)
Todo.belongsTo(User)



module.exports = {
    User,
    Todo
}



