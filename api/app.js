/**
Here is the basic configuration to execute an express app.
In this file goes the instances of the routes and middleware.
*/

import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import courseRoutes from "./routes/courses.routes.js";

const app = express();

// Basic middleware

// Is used to analyze HTML Forms Data encoded in application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Is used to manage JSON data
app.use(express.json());

// Routes
app.use(adminRoutes);
app.use(courseRoutes);

// 404
app.all("*", (req, res, next) => {
    next(res.status(404).json('Endpoint not found'));
})

export default app;