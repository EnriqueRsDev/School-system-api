import { Router } from "express";

import {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    destroyCourse
} from "../controllers/course.controllers.js";

const router = Router();

router.get('/course', getCourses);
router.get('/course/:id', getCourse);
router.post('/course', createCourse);
router.put('/course/:id', updateCourse);
router.delete('/course/:id', destroyCourse);

export default router;