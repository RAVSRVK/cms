const express = require("express")
const { getEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller")
const { adminRoutes } = require("../config/auth")

const employeeRouter = express.Router()
employeeRouter.get("/:id", getEmployee)
employeeRouter.patch("/:id", updateEmployee)
employeeRouter.delete("/:id",adminRoutes, deleteEmployee)

module.exports = employeeRouter
