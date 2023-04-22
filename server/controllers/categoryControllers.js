const Category = require('../models/ProductCategory');


// Controlador para crear una nueva categoría
exports.createCategory = async (req, res, next) => {
  try {
    const { name, description, products } = req.body;
    console.log(req.body)
    const category = new Category({
      name,
      description,
      products
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
    const categories = await Category.find().populate('subcategories', 'name').populate("products", "name");
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
    const { categoryId } = req.params;
    if(!categoryId || categoryId === null){
      return res.status(404).json({ error: 'Category no encontrada' }).populate("subcategories", "name").populate("products", "name");
    }
    const category = await Category.findById(categoryId).populate("products", "name");
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
    if(!name || name === null){
      return res.status(404).json({ error: 'Category no encontrada' });
    }
    const categories = await Category.find({ name: { $regex: name, $options: 'i' } }).populate('subcategories');
  
    if (!categories || categories.length===0) {
      return res.status(404).json({ error: 'Category no encontrada' });
    }
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
    const { categoryId } = req.params;
    const { name, description } = req.body;
    
    const category = await Category.findByIdAndUpdate(
      categoryId,
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
    console.log(req.params)
    const { categoryId } = req.params;
    const category = await Category.findByIdAndDelete(categoryId);
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


// Crear una subcategoría
/*exports.createSubcategory = async (req, res) => {
  console.log("first")
  const { name, description, categoryId } = req.body;
  try {
    // Busca la categoría padre
    const parentCategory = await Category.findById(categoryId);
    if (!parentCategory) {
      return res.status(404).send({ message: 'Categoría padre no encontrada' });
    }
    // Crea la subcategoría
    const subcategory = new Category({ name,description, parent: categoryId });
    console.log(subcategory)
    await subcategory.save();
    res.send(subcategory);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al crear la subcategoría' });
  }
};*/
