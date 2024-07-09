const db = require("../config/db");

const query = (sql, args) => {
    return new Promise((resolve, reject) => {
      db.query(sql, args, (err, results) => {
        if (err) {
            console.log(err);
          return reject(err);
        }
        resolve(results);
      });
    });
  };

const getIndividualEmployee = (id) => {
    return query(`select * from employee where employeeId=${id}`)
}

const deleteIndividualEmployee = (id) => {
    return query(`delete from employee where employeeId=${id}`)
}

// const updateIndividualEmployee = ()

module.exports = {
    getIndividualEmployee,
    deleteIndividualEmployee
}