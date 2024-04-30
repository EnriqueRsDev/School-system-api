import sequelize from "../../db/dbConfig.js";
import { DataTypes } from "sequelize";
import { Teacher } from "./teacher.js";
import { Course } from "./Course.js";

export const Student = sequelize.define('Student',
    {
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
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
    },
    {
        timestamps: true
    }
)

Teacher.hasMany(Student, { foreignKey: 'teacherId', sourceKey: 'teacherId' });
Student.belongsTo(Teacher, { foreignKey: 'studentId', targetKey: 'teacherId' });

Course.hasMany(Student, { foreignKey: 'courseId', sourceKey: 'courseId' });
Student.belongsTo(Course, { foreignKey: 'studentId', targetKey: 'courseId' });