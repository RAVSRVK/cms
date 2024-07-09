const { getAllEmployees, addNewEmployee, deleteAllEmployees } = require("../models/employees.model")
const getDecodedJwt = require("../utils/decodedJwt")
const getEmployees = async (req,res) => {
    const token  = req.header("token")
    const { companyId } = getDecodedJwt(token)
    // Extract jwt and get companyId to get all the detials
    const employees = await getAllEmployees(companyId)
    res.send(employees)
}

const addEmployee = async (req, res) => {
    const token  = req.header("token")
    const { companyId } = getDecodedJwt(token)
    const {employeeName, mobile, role} = req.body
    const query = await addNewEmployee(employeeName, mobile, role, companyId);
    console.log("query",query);
    res.send("User added successfullys")
}

const deleteEmployees = async(req, res) => {
    const token  = req.header("token")
    const { companyId } = getDecodedJwt(token)
    const p = await deleteAllEmployees(companyId);
    res.send("All Employees deleted")
}

module.exports = {
    getEmployees, addEmployee, deleteEmployees
}
