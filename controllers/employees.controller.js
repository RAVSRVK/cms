const { getAllEmployees, addNewEmployee, deleteAllEmployees } = require("../models/employees.model")
const getDecodedJwt = require("../utils/decodedJwt");
const { query, validationResult } = require('express-validator');

const getEmployees = async (req,res) => {
    const token  = req.header("token")
    try {
        const { companyId } = getDecodedJwt(token);
        const employees = await getAllEmployees(companyId);
        res.json(employees);
      } catch (err) {
        console.error("Error fetching employees:", err);
        res.status(500).json({ message: "Error fetching employees", error: err.message });
      }
}

const addEmployee = async (req, res) => {
    const result = validationResult(req)
    const token  = req.header("token")
    try {
        const { companyId } = getDecodedJwt(token)
        const {employeeName, mobile, role} = req.body
        const query = await addNewEmployee(employeeName, mobile, role, companyId);
        res.send("User added successfullys");
    } catch (err) {
        console.error("Error adding employee:", err);
        res.status(500).json({ message: "Error adding employee", error: err.message });
    }
}

const deleteEmployees = async(req, res) => {
    const token  = req.header("token")
    try {
        const { companyId } = getDecodedJwt(token)
        await deleteAllEmployees(companyId);
        res.send("All Employees deleted")    
    } catch (err) {
        console.error("Error adding employee:", err);
        res.status(500).json({ message: "Error adding employee", error: err.message });
    }
}

module.exports = {
    getEmployees, addEmployee, deleteEmployees
}
