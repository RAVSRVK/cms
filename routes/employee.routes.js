const express = require("express")
const { getEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller")

const employeeRouter = express.Router()
employeeRouter.get("/:id", getEmployee)
employeeRouter.patch("/:id", updateEmployee)
employeeRouter.delete("/:id", deleteEmployee)

module.exports = employeeRouter