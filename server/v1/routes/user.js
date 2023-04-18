const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');
const { timeoutMiddleware, validateCreateandUdpateUser, validateLogin } = require('../../helpers/validateFields');
const authMiddleware = require('../../middlewares/authMiddleware');

/**
 * Public Endpoints Categories
 */

//Endpoint de Login y obtención de Token
router.post('/login', timeoutMiddleware, validateLogin, userController.login )

/**
 * Private Endpoints Categories. Only user
 */

// Endpoint para crear un user
router.post('/register', timeoutMiddleware, validateCreateandUdpateUser,  userController.createUser);

// Endpoint para obtener todos los users
router.get('/', authMiddleware,  userController.getAllUsers);

// Endpoint para obtener un user por su ID
router.get('/:userId', authMiddleware, userController.getUserById);

// Endpoint para actualizar un user
router.patch('/:userId', timeoutMiddleware, authMiddleware, userController.updateUserById);

// Endpoint para eliminar un user
router.delete('/:userId', authMiddleware, userController.deleteUserById);

module.exports = router;

