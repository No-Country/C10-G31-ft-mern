const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken');
// Middleware de autenticación
const authMiddleware = async (req, res, next) => {
  try {
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
    const admin = await Admin.findById(decodedToken.userId);
    
    // Verificar si el usuario está activo
    if (!admin.isActive) {
      return res.status(401).json({ message: 'Usuario no activo.' });
    }
    
    // Agregar el usuario a la solicitud
    req.admin = admin;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'Token inválido.' });
  }
};


module.exports = authMiddleware
