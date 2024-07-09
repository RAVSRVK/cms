const db = require("../config/db");

const loginUser = (email, password) => {
  const query = `SELECT * FROM employee WHERE email="${email}" AND password="${password}"`;
  return new Promise((resolve, reject) => {  // Return the promise
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve(result);
    });
  });
}

const getEmployeeDetails = async (employeeId) => {
    const query = `select * from employee where employeeId=${employeeId}`
    console.log(query);
    try {
      return new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
          if (err) {
            return reject(err)
          }
          return resolve(result)
        })
      })
    } catch (err) {
        console.log(err);
        throw err
    }
}

module.exports = {loginUser, getEmployeeDetails};
