const cloudinary = require("cloudinary").v2;
const Product = require("../models/Product");
const Category = require("../models/ProductCategory");
const Subcategory = require('../models/ProductSubcategory')
const fs = require("fs-extra");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const getAllProducts = async (req, res) => {
  try {
    const searchOnDB = await Product.find({}).populate("category", "name").populate("subcategories", "name");
    searchOnDB
      ? res.status(200).json(searchOnDB)
      : res.status(404).json({ message: "No hay productos" });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "Error al obtener los productos", mess: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(404).json({ message: "No hay id de busqueda" });
    const productById = await Product.findById(id).populate("category", "name").populate("subcategories", "name");
    if(!productById){
      return res.status(404).json({ message: "No hay producto con ese id" });
    } 
    
    return res.status(200).json(productById)
    /*
    const categoryIds = productById.category.map((cat) => cat._id);
    const categories = await Category.find({ _id: { $in: categoryIds } });

    productById.category = categories;*/
  } catch (error) {
    return res
      .status(404)
      .json({
        message: "Error al obtener un producto por ID",
        mess: error.message,
      });
  }
};

const searchByName = async (req, res) => {
  const { name } = req.query;

  try {
    const products = await Product.find({
      name: { $regex: name, $options: "i" },
    }).populate("category", "name").populate("subcategories", "name");
    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No hay productos con ese nombre" });
    }

    return res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const postProduct = async (req, res, next) => {
  try {
    // Obtener los datos del producto de la solicitud
    const {
      name,
      description,
      available,
      category,
      subcategory,
      variations,
      attributes,
      price,
      seller,
    } = req.body;

    //buscamos la categoría
    const newCategory = await Category.findById(category);
    if (!newCategory) {
      return res.status(404).json({ message: "No hay categoría con ese id" });
    }

    const newSubcategory = await Subcategory.findById(subcategory)
    if (!newSubcategory) {
      return res.status(404).json({ message: "No hay subcategoría con ese id" });
    }

    // Crear un array para almacenar las URLs de las imágenes
    let imageUrls = [];

    // Si se envió al menos una imagen, procesarlas con Cloudinary
    if (req.files && req.files.image) {
      // Si hay más de una imagen, convertir a un array
      const images = Array.isArray(req.files.image)
        ? req.files.image
        : [req.files.image];

      // Procesar cada imagen
      for (const image of images) {
        const result = await cloudinary.uploader.upload(image.tempFilePath, {
          folder: "spotech",
        });
        imageUrls.push(result.secure_url);
        await fs.unlink(image.tempFilePath);
      }
    }

    // Crear un nuevo producto con los datos proporcionados
    const product = new Product({
      name,
      description,
      image: imageUrls,
      available,
      category: newCategory._id,
      subcategories: newSubcategory._id,
      variations,
      attributes,
      price,
      seller,
    });

    // Guardar el producto en la base de datos
    const savedProduct = await product.save();
    // Guardar el producto en la categoría
    newCategory.products.push(savedProduct);
    await newCategory.save();
    newSubcategory.products.push(savedProduct)
    await newSubcategory.save()

    // Responder con el producto guardado
    return res.status(201).json(savedProduct);
  } catch (error) {
    return res
      .status(500)
      .json({
        error,
        mess: error.message,
        message: "error creando un producto",
      });
  }
};

const editProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const file = req.files.image;

  try {
    const product = await Product.findById(id);
    console.log("product.image", product.image);

    if (!product) {
      return res.status(404).json({
        message: "Product no encontrado",
      });
    }

    // Eliminar la imagen anterior en Cloudinary

    if (file && product.image) {
      for (let i = 0; i < product.image.length; i++) {
        const public_id = product.image[i].split("/").pop().split(".")[0];
        console.log(public_id);
        await cloudinary.uploader.destroy(public_id);
      }
    }

    // Subir la nueva imagen a Cloudinary y obtener la URL
    if (file && file.length > 0) {
      const images = [];
      for (let i = 0; i < file.length; i++) {
        const result = await cloudinary.uploader.upload(file[i].tempFilePath);
        images.push(result.secure_url);
      }
      body.image = images;
    }

    // Actualizar los campos del producto
    product.name = body.name || product.name;
    product.image = body.image || product.image;
    product.available = body.available || product.available;
    product.category = body.category || product.category;
    product.subcategories = body.subcategories || product.subcategories;
    product.variations = body.variations || product.variations;
    product.attributes = body.attributes || product.attributes;
    product.price = body.price || product.price;
    product.seller = body.seller || product.seller;

    // Guardar el producto actualizado en la base de datos
    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mess: error.message,
      message: "Error actualizando el product",
    });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        mss: error.message,
        message: "Product no encontrado",
      });
    }

    // get image URLs from the product object
    const imageUrls =
      product.image instanceof Array ? product.image : [product.image];

    // delete images from Cloudinary
    for (const url of imageUrls) {
      const publicId = url.split("/").slice(-1)[0].split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    // delete product from database
    await Product.findByIdAndDelete(id);

    res.json({
      message: "Product eliminado satisfactoriamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mss: error.message,
      message: "Error eliminando el producto",
    });
  }
};

module.exports = {
  postProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
  searchByName,
};
