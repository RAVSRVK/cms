const { getIndividualEmployee, deleteIndividualEmployee } = require("../models/employee.model");

const getEmployee= async(req,res) => {
    const {id}= req.params
    try {
        const employeeDetail = await getIndividualEmployee(id)
        console.log(employeeDetail);
        res.send(employeeDetail);
    } catch (error) {
        console.log(error);
    }
}

const updateEmployee = (req, res) => {
    const {id}= req.params
    
}

const deleteEmployee = async( req, res) => {
    const {id} = req.params
    try {
       const deleted = await deleteIndividualEmployee(id)
       console.log(deleted);
        res.send("Deleted Successfully")
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getEmployee, 
    updateEmployee,
    deleteEmployee
}