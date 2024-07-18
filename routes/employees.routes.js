const express = require('express');
const { query, body, checkSchema } = require('express-validator');
const { getEmployees, addEmployee, deleteEmployees } = require('../controllers/employees.controller');
const { adminRoutes } = require('../config/auth');
const { createEmployeeValidationSchema } = require('../utils/validationSchema');
const employeesRouter = express.Router()

employeesRouter.get("/",adminRoutes, getEmployees);
employeesRouter.post("/", adminRoutes, checkSchema(createEmployeeValidationSchema),
    // body("employeeName").notEmpty().withMessage("Mandatory field").isString(), 
    // body("companyId").equals("1").withMessage("Adding josh employees - 1"),
    // body("mobile").isMobilePhone().withMessage("Mobile number cannot exceed 10 digits")],
    addEmployee);
employeesRouter.delete("/", adminRoutes, deleteEmployees);

module.exports = employeesRouter
