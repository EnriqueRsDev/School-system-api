import { Sequelize } from "sequelize";

const sequelize = new Sequelize('schoolDB', 'postgres', 'Enrique200', {
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;