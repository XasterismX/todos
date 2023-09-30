import {Sequelize} from "sequelize";

const sequelize = new Sequelize('todolist', 'postgres', 'root',
    {
        host: 'localhost',
        dialect: 'postgres'

    })

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize