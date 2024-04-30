import sequelize from "../../db/dbConfig.js";
import { DataTypes } from "sequelize";
import { Course } from "./Course.js";
import { Student } from "./Student.js";

export const StudentGrades = sequelize.define('StudentGrade',
    {
        gradeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        grades: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        timestamps: true
    }
)

Course.hasMany(StudentGrades, { foreignKey: 'courseId', sourceKey: 'courseId' });
StudentGrades.belongsTo(Course, { foreignKey: 'gradeId', targetKey: 'courseId' });

Student.hasMany(StudentGrades, { foreignKey: 'studentId', sourceKey: 'studentId' });
StudentGrades.belongsTo(Student, { foreignKey: 'gradeId', targetKey: 'studentId' });