import { Router } from "express";
import {
    getAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    destroyAdmin
} from "../controllers/admin.controllers.js";

const router = Router();

router.get('/admin', getAdmins);
router.get('/admin/:id', getAdmin);
router.post('/admin', createAdmin);
router.put('/admin/:id', updateAdmin);
router.delete('/admin/:id', destroyAdmin);

export default router;