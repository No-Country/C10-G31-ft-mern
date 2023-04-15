const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const categoriesControllers = require('../../controllers/categoryControllers');
const { validateFields } = require('../../helpers/validateFields');
const authMiddleware = require('../../middlewares/authMiddleware');


/**
 * Public Endpoints Categories
 */

// Endpoint para obtener todos 
router.get('/', categoriesControllers.getCategories );

router.get('/name', categoriesControllers.getCategoriesByName  )

// Endpoint para obtener  por su ID
router.get('/:categoryId', categoriesControllers.getCategoryById);

/**
 * Private Endpoints Categories
 */

// Endpoint para crear
router.post('/',  authMiddleware,  categoriesControllers.createCategory);

// Endpoint para actualizar 
router.patch('/:categoryId', authMiddleware, categoriesControllers.updateCategory);

// Endpoint para eliminar 

router.delete('/:categoryId', authMiddleware, categoriesControllers.deleteCategory);

module.exports = router;