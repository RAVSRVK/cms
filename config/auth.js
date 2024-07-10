const jwt = require("jsonwebtoken")
const db = require("./db")
const authenticateToken = async (req, res, next) => {
    const token  = req.header("token")
    try {
        const decoded = jwt.decode(token, "abcdefg")
        console.log(decoded);
        const query =  await new Promise(async (resolve, reject) => {
            try {
                const p = await db.query(`select * from employee where email="${decoded.email}"`, (err, result) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(result[0])
                })
            } catch (error) {
                reject(error)
                throw(error)
            }
        })
        if(query?.email===decoded.email) {
            next()
        }
        else {
            res.status(401).json({message: "Not Authorized"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "SOmething went wrong", error: error.message})
    }
}

const adminRoutes = (req, res, next) => {
    const token  = req.header("token");
    const decoded = jwt.decode(token, "abcdefg")
    if(decoded.role==='admin') {
        next()
    }
    else{
        res.status(403).json({message:"Something went wrong", error: error.message})
    }
}

module.exports = {
    authenticateToken,
    adminRoutes
}