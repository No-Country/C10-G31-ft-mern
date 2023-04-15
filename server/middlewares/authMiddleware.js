const User = require('../models/User')
const jwt = require('jsonwebtoken');
// Middleware de autenticación
const authMiddleware = async (req, res, next) => {
  try {
    console.log(req)
    // Verificar si existe el token de autorización en la cabecera
    const authHeader = req.headers.authorization;
    console.log("myauthHeader: ", authHeader)
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token de autorización no proporcionado.' });
    }

    // Extraer el token de autorización de la cabecera
    const token = authHeader.split(' ')[1];
    console.log("mytoken:", token)
    
    // Verificar si el token es válido
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("mydecodedToken: ", decodedToken.exp)
    if((Date.now()/1000) > decodedToken.exp){
      return res.status(401).json({ message: 'Token expirado.' });
    }
    
    // Buscar al usuario en la base de datos
    const user = await User.findById(decodedToken.userId);
    
    // Verificar si el usuario está activo
    if (!user.isActive) {
      return res.status(401).json({ message: 'Usuario no activo.' });
    }

    if (user.role !== "admin"){
     return res.status(401).json({ message: 'Usuario no autorizado. tu rol no te da pa esto, estudie primero' })
    }
    // Agregar el usuario a la solicitud
    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Token inválido.' });
  }
};


module.exports = authMiddleware
