const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userControllers');
const { timeoutMiddleware, validateCreateandUdpateUser, validateLogin } = require('../../helpers/validateFields');
const authMiddleware = require('../../middlewares/authMiddleware');
const { createDirection, updateDirectionById, deleteDirectionById, getDirectionsById } = require('../../controllers/directionControllers');

/**
 * Public Endpoints Categories
 */

//Endpoint de Login y obtención de Token
router.post('/login', timeoutMiddleware, userController.login )

/**
 * Private Endpoints Categories. Only user
 */

//ruta para el perfil por token
router.post('/profile', authMiddleware, userController.getProfile)

// Endpoint para crear un user
router.post('/register', timeoutMiddleware, validateCreateandUdpateUser,  userController.createUser);

// Endpoint para obtener todos los users
router.get('/', authMiddleware, userController.getAllUsers);


// Endpoint para obtener un user por su ID
router.get('/:userId', authMiddleware, userController.getUserById);
// Endpoint para actualizar un user
router.patch('/:userId', authMiddleware,  userController.updateUserById);

// Endpoint para eliminar un user
router.delete('/:userId', authMiddleware, userController.deleteUserById);


//CRUD direcciones
router.post('/:userId/direction', authMiddleware, createDirection)
router.get('/:userId/direction/:directionId', authMiddleware, getDirectionsById)
router.patch('/:userId/direction/:directionId', authMiddleware, updateDirectionById)
router.delete('/:userId/direction/:directionId', authMiddleware, deleteDirectionById)

module.exports = router;

