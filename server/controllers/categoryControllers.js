const Category = require('../models/ProductCategory');

// Controlador para crear una nueva categoría
exports.createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const category = new Category({
      name,
      description,
    });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
   return res
      .status(500)
      .json({ error: 'Error creando categoria', message: err.message });
  }
};

// Controlador para obtener todas las categorías
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().populate('subcategories');
    res.status(200).json(categories);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error obteniendo categories', message: err.message });
  }
};

// Controlador para obtener una categoría por su id
exports.getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).populate('subcategories');
    if (!category) {
      return res.status(404).json({ error: 'Category no encontrada' });
    }
    res.status(200).json(category);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error obteniendo category', message: err.message });
  }
};

exports.getCategoriesByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const categories = await Category.find({ name: { $regex: name, $options: 'i' } }).populate('subcategories');
    res.status(200).json(categories);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error obteniendo categories', message: err.message });
  }
};


// Controlador para actualizar una categoría
exports.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ error: 'Category no encontrada' });
    }
    res.status(200).json(category);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error actualizando category', message: err.message });
  }
};

// Controlador para eliminar una categoría
exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ error: 'Category no encontrada' });
    }
    res.status(200).json(category);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error eliminando category', message: err.message });
  }
};
