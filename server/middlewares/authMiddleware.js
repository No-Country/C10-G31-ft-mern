// Middleware de autenticación
const authMiddleware = async (req, res, next) => {
  try {
    // Verificar si el token es válido
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
    // Buscar al usuario en la base de datos
    const admin = await Admin.findById(decodedToken.userId);
    
    // Verificar si el usuario está activo
    if (!admin.isActive) {
      return res.status(401).json({ message: 'Usuario no activo.' });
    }
    
    // Agregar el usuario a la solicitud
    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};
