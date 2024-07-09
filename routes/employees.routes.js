const express = require('express');
const { getEmployees, addEmployee, deleteEmployees } = require('../controllers/employees.controller');
const employeesRouter = express.Router()

employeesRouter.get("/",getEmployees);
employeesRouter.post("/", addEmployee);
employeesRouter.delete("/", deleteEmployees);

module.exports = employeesRouter