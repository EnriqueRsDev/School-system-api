import { Course } from "../models/Course.js";

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        if (courses.length === 0) {
            return res.status(400).json('No courses created yet');
        }
        res.json(courses)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findByPk(id);

        if (!course) {
            return res.status(400).json('Course was not found');
        }

        res.json(course);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createCourse = async (req, res) => {
    try {
        const { courseName } = req.body;
        const newCourse = await Course.create({ courseName: courseName });
        res.json(newCourse);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { courseName } = req.body;

        const course = await Course.findByPk(id);

        if (!course) {
            return res.status(400).json('There is not a course to edit.');
        }

        const newCourse = await course.update({ courseName: courseName });
        res.json(newCourse)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const destroyCourse = async (req, res) => {
    try {
        const { id } = req.params;
        await Course.destroy({ where: { courseId: id } });
        res.json('Course was deleted');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}