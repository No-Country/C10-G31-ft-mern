const route = require('express').Router()
const { createSubcategory, getSubcategories, getSubcategoryById, updateSubcategory, deleteSubcategory } = require('../../controllers/subCategoryControllers')

const { validateFields, validateQuery } = require('../../helpers/validateFields')
const authMiddleware = require('../../middlewares/authMiddleware')


route.get('/', getSubcategories)
route.get('/name', validateQuery, getSubcategories)
route.get('/:subcategoryId', getSubcategoryById)
route.post('/:parentcategoryId/subcategory', authMiddleware, createSubcategory)
route.patch('/:subcategoryId', authMiddleware, updateSubcategory)
route.delete('/:subcategoryId', authMiddleware, deleteSubcategory)
