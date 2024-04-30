import sequelize from "../../db/dbConfig.js";
import { DataTypes } from "sequelize";

export const Course = sequelize.define('Course',
    {
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        courseName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    }
)