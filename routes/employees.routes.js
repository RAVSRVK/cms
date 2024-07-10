const express = require('express');
const { query } = require('express-validator');
const { getEmployees, addEmployee, deleteEmployees } = require('../controllers/employees.controller');
const { adminRoutes } = require('../config/auth');
const employeesRouter = express.Router()

employeesRouter.get("/",adminRoutes, getEmployees);
employeesRouter.post("/", adminRoutes, query("employeeName").isString(),addEmployee);
employeesRouter.delete("/", adminRoutes, deleteEmployees);

module.exports = employeesRouter
