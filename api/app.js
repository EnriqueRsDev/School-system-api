/**
Here is the basic configuration to execute an express app.
In this file goes the instances of the routes and middleware.
*/

import express from "express";

const app = express();

// Basic middleware

// Is used to analyze HTML Forms Data encoded in application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Is used to manage JSON data
app.use(express.json());

export default app;