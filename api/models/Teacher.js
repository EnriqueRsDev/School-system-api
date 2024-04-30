import sequelize from "../../db/dbConfig.js";
import { DataTypes } from "sequelize";
import { Course } from "./Course.js";

export const Teacher = sequelize.define('Teacher',
    {
        teacherId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direction: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

Course.hasMany(Teacher, { foreignKey: 'courseId', sourceKey: 'courseId' });
Teacher.belongsTo(Course, { foreignKey: 'teacherId', targetKey: 'courseId' })