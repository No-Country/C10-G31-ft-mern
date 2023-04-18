
const authRoleAdmin = (req, res, next) => {
  console.log(req.user, "req")
  const { role } = req.user;
  if (role !== 'admin') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

const authRoleClient = (req, res, next)=>{
  const { role } = req.user;
  if (role !== 'client') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
}

module.exports = authRoleAdmin, authRoleClient;