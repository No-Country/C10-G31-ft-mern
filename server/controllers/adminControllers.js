const Admin = require('../models/Admin');
const { validationResult } = require('express-validator');

// Crear un admin
const createAdmin = async (req, res, next) => {
  // Validación de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // Extracción de datos del cuerpo de la solicitud
  const { name, lastName, email, password } = req.body;

  try {
    // Verificación de si ya existe un admin con el mismo correo electrónico
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
    }

    // Creación de un nuevo admin
    const newAdmin = new Admin({ name, lastName, email, password });
    await newAdmin.save();

    return res.status(201).json({ message: 'Admin creado exitosamente', admin: newAdmin });
  } catch (error) {
    return next(error);
  }
};

// Obtener todos los admins
const getAllAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();
    return res.status(200).json({ admins });
  } catch (error) {
    return next(error);
  }
};

// Obtener un admin por id
const getAdminById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin no encontrado' });
    }
    return res.status(200).json({ admin });
  } catch (error) {
    return next(error);
  }
};

// Editar un admin por id
const updateAdminById = async (req, res, next) => {
  // Validación de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { name, lastName, email } = req.body;

  try {
    // Verificación de si el admin existe
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin no encontrado' });
    }

    // Actualización de los datos del admin
    admin.name = name;
    admin.lastName = lastName;
    admin.email = email;
    await admin.save();

    return res.status(200).json({ message: 'Admin actualizado exitosamente', admin });
  } catch (error) {
    return next(error);
  }
};

// Eliminar un admin por id
const deleteAdminById = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Verificación de si el admin existe
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin no encontrado' });
    }

    // Eliminación del admin
    await admin.remove();

    return res.status(200).json({ message: 'Admin eliminado exitosamente' });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createAdmin, getAllAdmins, getAdminById, updateAdminById, deleteAdminById };
