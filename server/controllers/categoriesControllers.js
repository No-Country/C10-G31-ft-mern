const Category = require('../models/ProductCategory');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


// Crear uuna categoría
const createCategory = async (req, res, next) => {
  // Validación de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  // Extracción de datos del cuerpo de la solicitud
  const { name } = req.body;

  try {
    // Verificación de si ya existe 
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: 'La categoría ya está registrada' });
    }

    // Creación de un nuevo admin
    const newCategory = new Category({ name});
    await newCategory.save();

    return res.status(201).json({ message: 'Categoría creada exitosamente', Category: newCategory });
  } catch (error) {
    return next(error);
  }
};

// Obtener todos los admins
const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ categories });
  } catch (error) {
    return next(error);
  }
};

// Obtener una categoría por id
const getCategoryById = async (req, res, next) => {
  console.log(req.params)
  const { categoryId } = req.params;
  console.log("id",categoryId)

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'categoría no encontrada' });
    }
    return res.status(200).json({ category });
  } catch (error) {
    return next(error);
  }
};

// Editar una categoría por id
const updateCategoryById = async (req, res, next) => {
  // Validación de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { categoryId } = req.params;
  const { name } = req.body;

  try {
    // Verificación de si  existe
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'category no encontrado' });
    }

    // Actualización de los datos del category
    category.name = name;
    await category.save();

    return res.status(200).json({ message: 'category actualizado exitosamente', category });
  } catch (error) {
    return next(error);
  }
};

// Eliminar un admin por id
const deleteCategoryById = async (req, res, next) => {
  const { categoryId } = req.params;

  try {
    // Verificación de si existe
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'category no encontrado' });
    }

    // Eliminación
    await Category.findByIdAndDelete(categoryId);

    return res.status(200).json({ message: 'category eliminado exitosamente' });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createCategory, getAllCategories, getCategoryById, updateCategoryById, deleteCategoryById };
