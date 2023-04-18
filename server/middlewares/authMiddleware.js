const User = require('../models/User')
const jwt = require('jsonwebtoken');
// Middleware de autenticación
const authMiddleware = async (req, res, next) => {
  try {

    // Verificar si existe el token de autorización en la cabecera
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token de autorización no proporcionado.' });
    }

    // Extraer el token de autorización de la cabecera
    const token = authHeader.split(' ')[1];
  
    
    // Verificar si el token es válido
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if(!token || !decodedToken.userId){
      return res.status(401).json({ message: 'Token inválido.' });
    }

    // Verificar si el token ha expirado

    if((Date.now()/1000) > decodedToken.exp){
      return res.status(401).json({ message: 'Token expirado.' });
    }
    
    // Buscar al usuario en la base de datos
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado.' });
    }
    
    // Verificar si el usuario está activo
    if (!user.isActive) {
      return res.status(401).json({ message: 'Usuario no activo.' });
    }

    // Agregar el usuario a la solicitud
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};


module.exports = authMiddleware
