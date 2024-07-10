const express = require('express');
const loginRouter = require('./routes/login.routes');
const employeesRouter = require('./routes/employees.routes');
const employeeRouter = require('./routes/employee.routes');
const { authenticateToken } = require('./config/auth');

const PORT=8000
const app = express();

app.use(express.json());


app.use("/login", loginRouter);
app.use("/employees", authenticateToken, employeesRouter)
app.use("/employee", authenticateToken, employeeRouter)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
