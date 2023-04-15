const jwt = require('jsonwebtoken');


function generateToken(user) {
  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
      role: user.role,
      exp: Date.now() + 60 * 1000
    },
    process.env.JWT_SECRET,
  );
  return token;
}

module.exports = generateToken
