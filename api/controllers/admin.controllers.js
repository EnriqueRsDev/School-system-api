import e from "express";
import { Admin } from "../models/Admin.js";

export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll()
        if (admins.length === 0) {
            return res.json("There aren't admins created yet");
        }
        res.json(admins);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getAdmin = async (req, res) => {
    try {
        const { adminId } = req.params;
        const admin = await Admin.findByPk(adminId);
        res.json(admin);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createAdmin = async (req, res) => {
    try {
        const { username, email, phone } = req.body;
        const newAdmin = await Admin.create({ username, email, phone });
        res.json(newAdmin);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const { adminId } = req.params;
        const { username, email, phone } = req.body;

        const admin = await Admin.findByPk(adminId);
        const newAdmin = await admin.update({ username, email, phone });

        res.json(newAdmin);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const destroyAdmin = async (req, res) => {
    try {
        const { adminId } = req.params;
        await Admin.destroy({ where: { adminId: adminId } });
        res.json('Admin was deleted');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}