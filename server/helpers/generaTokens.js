const jwt = require('jsonwebtoken');


function generateToken(admin) {
  const token = jwt.sign(
    {
      userId: admin._id,
      email: admin.email,
      exp: Date.now() + 60 * 1000
    },
    process.env.JWT_SECRET,
  );
  return token;
}

module.exports = generateToken
