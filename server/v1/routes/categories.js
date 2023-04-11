const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const categoriesControllers = require('../../controllers/categoriesControllers');
const { validateFields } = require('../../helpers/validateFields');
const authMiddleware = require('../../middlewares/authMiddleware');



// Endpoint para crear
router.post('/',  authMiddleware,  categoriesControllers.createCategory);

// Endpoint para obtener todos 
router.get('/', categoriesControllers.getAllCategories);

// Endpoint para obtener  por su ID
router.get('/:categoryId', categoriesControllers.getCategoryById);

// Endpoint para actualizar 
router.patch('/:categoryId', authMiddleware, categoriesControllers.updateCategoryById);

// Endpoint para eliminar 
router.delete('/:categoryId', authMiddleware, categoriesControllers.deleteCategoryById);

module.exports = router;