const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const categoriesControllers = require("../../controllers/categoryControllers");

const {
  validateFields,
  validateQuery,
} = require("../../helpers/validateFields");
const authMiddleware = require("../../middlewares/authMiddleware");
const {
  createSubcategory,
  getSubcategories,
  getSubcategoryById,
  updateSubcategory,
  deleteSubcategory,
  getSubcategoriesByName,
} = require("../../controllers/subCategoryControllers");
//const authRole = require('../../middlewares/authRole')

/**
 * Public Endpoints Categories
 */

// Endpoint para obtener todos
router.get("/", categoriesControllers.getCategories);

router.get("/name", validateQuery, categoriesControllers.getCategoriesByName);

// Endpoint para obtener  por su ID
router.get("/:categoryId", categoriesControllers.getCategoryById);

/**
 * Private Endpoints Categories
 */

// Endpoint para crear
router.post("/", authMiddleware, categoriesControllers.createCategory);

// Endpoint para actualizar
router.patch(
  "/:categoryId",
  authMiddleware,
  categoriesControllers.updateCategory
);

// Endpoint para eliminar

router.delete(
  "/:categoryId",
  authMiddleware,
  categoriesControllers.deleteCategory
);

//rutas de subcategorias
router.post("/:categoryId/subcategory", authMiddleware, createSubcategory  );
//editar subcategorias
router.patch(
  "/:categoryId/subcategory/:subcategoryId",
  authMiddleware,
  updateSubcategory
);
//eliminar subcategorias
router.delete(
  "/:categoryId/subcategory/:subcategoryId",
  authMiddleware,
  deleteSubcategory
);
/*
//obtener subcategorias por nombre
router.get("/:categoryId/subcategory/name", getSubcategoriesByName);
//obtener subcategorias por id
router.get("/:categoryId/subcategory/:subcategoryId", getSubcategoryById);

router.get("/:categoryId/subcategory", getSubcategories);
*/
module.exports = router;
