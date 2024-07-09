const db = require("../config/db");

const getAllEmployees = async (companyId) => {
  const query = `SELECT * FROM employee WHERE companyI=${companyId}`;

  try {
    const result = await new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
    return result;
  } catch (err) {
    console.error("Error fetching employees:", err);
    throw err; // Re-throw the error to handle it in the controller
  }
};

const addNewEmployee = async (employeeName, mobile, role, companyId) => {
  const query = `INSERT INTO employee (employeeName, mobile, role, companyId) VALUES ("${employeeName}", "${mobile}", "${role}", ${companyId})`;

  try {
    const result = await new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
    return result;
  } catch (err) {
    console.error("Error adding new employee:", err);
    throw err; // Re-throw the error to handle it in the controller
  }
};

const deleteAllEmployees = async (companyId) => {
  const query = `DELETE FROM employee WHERE companyId=${companyId} AND role="user"`;

  try {
    const result = await new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
    return result;
  } catch (err) {
    console.error("Error deleting employees:", err);
    throw err; // Re-throw the error to handle it in the controller
  }
};

module.exports = {
  getAllEmployees,
  addNewEmployee,
  deleteAllEmployees
};
