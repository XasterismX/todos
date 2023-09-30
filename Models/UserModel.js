import sequelize from "../database.js";
import {DataTypes} from "sequelize";

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
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    todoCount: {
        type: DataTypes.INTEGER,
    }


})
User.sync({alter: true})
 export default User