const {jwtDecode} = require("jwt-decode")

const getDecodedJwt = (token) => {
    return jwtDecode(token)
} 

module.exports = getDecodedJwt