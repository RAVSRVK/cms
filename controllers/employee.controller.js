const { getIndividualEmployee, deleteIndividualEmployee, updateIndividualEmployee } = require("../models/employee.model");

const getEmployee= async(req,res) => {
    const {id}= req.params
    try {
        const employeeDetail = await getIndividualEmployee(id)
        if(id===employeeDetail.employeeId){
            res.send(employeeDetail);
        }
        else{
            res.status(403).json({message: "No access to fetch others records"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error fetching employee", error: error.message})
    }
}

const updateEmployee = async (req, res) => {
    const {id}= req.params
    const queryArr = []
    for(const [k, v] of Object.entries(req.body)) {
        queryArr.push(`${k} = "${v}"`);
    }
    try {
        const updated = await updateIndividualEmployee(queryArr, id)
        res.send("Updated Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Update Failed", error: error.message})      
    }
}

const deleteEmployee = async( req, res) => {
    const {id} = req.params
    // delete the record and then identify
    const isRecordExisting = await getIndividualEmployee(id)
    console.log('isRecordExistingisRecordExisting', isRecordExisting);
    try {
       const deleted = await deleteIndividualEmployee(id)
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
