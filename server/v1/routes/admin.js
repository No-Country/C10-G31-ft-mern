const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const adminController = require('../../controllers/adminControllers');
const { validateFields } = require('../../helpers/validateFields');
const authMiddleware = require('../../middlewares/authMiddleware');


router.post('/auth', adminController.login )
// Endpoint para crear un admin
router.post('/', validateFields('post'),  adminController.createAdmin);

// Endpoint para obtener todos los admins
router.get('/', adminController.getAllAdmins);

// Endpoint para obtener un admin por su ID
router.get('/:adminId', adminController.getAdminById);

// Endpoint para actualizar un admin
router.patch('/:adminId', validateFields('patch'), authMiddleware, adminController.updateAdminById);

// Endpoint para eliminar un admin
router.delete('/:adminId', authMiddleware, adminController.deleteAdminById);

module.exports = router;

