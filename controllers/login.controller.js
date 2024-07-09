const {loginUser, getEmployeeDetails} = require("../models/login.model");
const generateToken = require("../utils/jwt");

const loginController = async (req, res) => {
    const {email, password } = req.body
    let token = ""
    try {
        const result = await loginUser(email, password);  // Await the Promise
        if (result.length === 0) {
            return res.status(401).send("No user found, please enter valid credentials");
        } else {
          const employeeDetails = await getEmployeeDetails(result[0]?.employeeId)
          token = generateToken(employeeDetails[0]);
        }
        return res.send({ token });  // Return the token as a JSON response
      } catch (err) {
        console.error(err);
        return res.status(500).send("Internal server error");
      }
    }

module.exports = loginController
