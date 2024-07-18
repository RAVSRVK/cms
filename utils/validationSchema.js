const createEmployeeValidationSchema = {
    employeeName: {
        notEmpty: {
            errorMessage: "EmployeeName cannot be empty"
        },
        
    },
    companyId: {
        notEmpty: {
            errorMessage: "CompanyId cannot be empty"
        },
    mobile : {
        isMobilePhone: {
            errorMessage: "Mobile number must be 10 digits"
        }
    }
    }
}
module.exports = {
    createEmployeeValidationSchema
}