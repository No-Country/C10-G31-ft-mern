const Category = require('../models/ProductCategory')
const Subcategory = require('../models/ProductSubcategory')

// Controlador para crear una nueva subcategoría
exports.createSubcategory = async (req, res, next) => {

  try {

    const {categoryId} = req.params
    const { name, description } = req.body;
    const Parentcategory = await Category.findById(categoryId);
    if (!Parentcategory) {
      return res.status(404).json({ error: 'Categoria no encontrada' });
    }

    const subcategory = new Subcategory({
      name,
      description,
      Parentcategory : Parentcategory._id
    });


    await subcategory.save();
    Parentcategory.subcategories.push(subcategory)
    await Parentcategory.save()

    res.status(201).json(subcategory);
  } catch (err) {
   return res
      .status(500)
      .json({ error: 'Error creando subcategoria', message: err.message });
  }
}

// Controlador para obtener todas las subcategorías
exports.getSubcategories = async (req, res, next) => {
  try {
    const subcategories = await Subcategory.find().populate("Parentcategory", "name");
    res.status(200).json(subcategories);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error obteniendo subcategories', message: err.message });
  }
}

// Controlador para obtener una subcategoría por su id
exports.getSubcategoryById = async (req, res, next) => {
  try {
    console.log(req.params)
    const { subcategoryId } = req.params;
    if(!subcategoryId || subcategoryId === null){
      return res.status(404).json({ error: 'Subcategory no encontrada' });
    }
    const subcategory = await Subcategory.findById(subcategoryId).populate("Parentcategory", "name").populate("products");
    if (!subcategory) {
      return res.status(404).json({ error: 'Subcategory no encontrada' });
    }
    res.status(200).json(subcategory);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error obteniendo subcategory', message: err.message });
  }
}

exports.getSubcategoriesByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    if(!name || name === null){
      return res.status(404).json({ error: 'Subcategory no encontrada' });
    }
    const subcategories = await Subcategory.find({ name: { $regex: name, $options: 'i' } }).populate('Parentcategory');
  
    if (!subcategories || subcategories.length===0) {
      return res.status(404).json({ error: 'Subcategory no encontrada' });
    }
    res.status(200).json(subcategories);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error obteniendo subcategory', message: err.message });
  }
}

// Controlador para actualizar una subcategoría
exports.updateSubcategory = async (req, res, next) => {
  try {
    console.log(req.params)
    const { subcategoryId } = req.params;
    const {categoryId} =req.params;
    const { name, description} = req.body;
    const Parentcategory = await Category.findById(categoryId);
    if (!Parentcategory) {
      return res.status(404).json({ error: 'Categoria no encontrada' });
    }
    const subcategory = await Subcategory.findByIdAndUpdate(
      subcategoryId,
      {
        name,
        description,
        Parentcategory : Parentcategory._id
      },
      { new: true }
    );
    if (!subcategory) {
      return res.status(404).json({ error: 'Subcategory no encontrada' });
    }
    res.status(200).json(subcategory);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error actualizando subcategory', message: err.message });
  }
}

// Controlador para eliminar una subcategoría
exports.deleteSubcategory = async (req, res, next) => {
  try {
    const { subcategoryId } = req.params;
    const subcategory = await Subcategory.findByIdAndDelete(subcategoryId);
    if (!subcategory) {
      return res.status(404).json({ error: 'Subcategory no encontrada' });
    }
    res.status(200).json(subcategory);
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Error eliminando subcategory', message: err.message });
  }
}