const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    const payload = {
      email: user.email,
      username: user.employeeName,
      role: user.role,
      companyId: user.companyId
    };
  
    return jwt.sign(payload, "abcdefg", { expiresIn: '1d' });
};

module.exports = generateToken;
