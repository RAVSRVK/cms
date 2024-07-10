const db = require("../config/db");

const query = (sql, args) => {
    try {
        const result = new Promise((resolve, reject) => {
            db.query(sql, args, (err, results) => {
              if (err) {
                  console.log(err);
                return reject(err);
              }
              resolve(results);
            });
          });
          return result    
    } catch (error) {
        console.error("Error fetching employees:", err);
        throw err;
    }
  };

const getIndividualEmployee = (id) => {
    return query(`select * from employee where employeeId=${id}`)
}

const deleteIndividualEmployee = (id) => {
    return query(`delete from employee where employeeId=${id}`)
}

const updateIndividualEmployee = (queryString, id) => {
    return query(`update employee  set ${queryString} where employeeId=${id}`)
}

module.exports = {
    getIndividualEmployee,
    deleteIndividualEmployee,
    updateIndividualEmployee
}