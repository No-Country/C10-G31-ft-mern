const route = require('express').Router()
const { createSubcategory, getSubcategories, getSubcategoryById, updateSubcategory, deleteSubcategory } = require('../../controllers/subCategoryControllers')

//const { validateFields, validateQuery } = require('../../helpers/validateFields')
//controller de subcategories
const { validateFields, validateQuery } = require('../../helpers/validateFields')

const authMiddleware = require('../../middlewares/authMiddleware')
const subCategoryControllers = require('../../controllers/subCategoryControllers')

route.get('/', subCategoryControllers.getSubcategories)
route.get('/name', validateQuery, subCategoryControllers.getSubcategoriesByName)
route.get('/:subcategoryId', subCategoryControllers.getSubcategoryById)
/*route.post('/:parentcategoryId/subcategory', authMiddleware, subCategoryControllers.createSubcategory)
route.patch('/:subcategoryId', authMiddleware, subCategoryControllers.updateSubcategory)
route.delete('/:subcategoryId', authMiddleware, subCategoryControllers.deleteSubcategory)*/


module.exports = route