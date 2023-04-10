const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const adminController = require('../controllers/adminController');


// Endpoint para crear un admin
router.post('/admins', validateFields("post"), adminController.createAdmin);

// Endpoint para obtener todos los admins
router.get('/admins', adminController.getAllAdmins);

// Endpoint para obtener un admin por su ID
router.get('/admins/:adminId', adminController.getAdminById);

// Endpoint para actualizar un admin
router.patch('/admins/:adminId', validateFields("patch"), adminController.updateAdmin);

// Endpoint para eliminar un admin
router.delete('/admins/:adminId', adminController.deleteAdmin);

module.exports = router;
