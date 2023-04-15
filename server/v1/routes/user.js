const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');
const { validateCreateandUdpateUser, validateLogin } = require('../../helpers/validateFields');
const authMiddleware = require('../../middlewares/authMiddleware');

/**
 * Public Endpoints Categories
 */

//Endpoint de Login y obtención de Token
router.post('/auth', validateLogin, userController.login )

/**
 * Private Endpoints Categories. Only admin role user
 */

// Endpoint para crear un user
router.post('/', validateCreateandUdpateUser,  userController.createUser);

// Endpoint para obtener todos los users
router.get('/', authMiddleware,  userController.getAllUsers);

// Endpoint para obtener un user por su ID
router.get('/:userId', authMiddleware, userController.getUserById);

// Endpoint para actualizar un admin
router.patch('/:userId', authMiddleware, validateCreateandUdpateUser, userController.updateUserById);

// Endpoint para eliminar un admin
router.delete('/:userId', authMiddleware, userController.deleteUserById);

module.exports = router;

