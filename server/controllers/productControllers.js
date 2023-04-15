const cloudinary = require("cloudinary").v2;
const Product = require("../models/Product");
const fs = require("fs-extra");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const getAllProducts = async (req, res) => {
  try {
    const searchOnDB = await Product.find({});
    searchOnDB
      ? res.status(200).json(searchOnDB)
      : res.status(404).json({ message: "No hay productos" });
  } catch (error) {
    return res.status(404).json({ message: "Error al obtener los productos" });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    id
      ? console.log(id)
      : res.status(404).json({ message: "No hay id de busqueda" });
    const productById = await Product.findById(id);
    productById
      ? res.status(200).json(productById)
      : res.status(404).json({ message: "No hay producto con ese id" });
  } catch (error) {
    res.status(404).json({ message: "Error al obtener un producto por ID" });
  }
};


const searchByName = async (req, res) => {
  const { name } = req.query;

  try {
    const products = await Product.find({ name: { $regex: name, $options: "i" } }).populate("category");

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const postProduct = async (req, res, next) => {

  try {
    console.log(req.body)
    // Obtener los datos del producto de la solicitud
    const { name, description, available, category, variations,attributes, price, seller } = req.body;
    
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
      images: imageUrls,
      available,
      category,
      variations,
      attributes,
      price,
      seller,
    });

    // Guardar el producto en la base de datos
    const savedProduct = await product.save();
    console.log(savedProduct.images);
    // Responder con el producto guardado
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({error, message:"alguna vaina se danó creando el product"});
  }
};

const editProduct = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const file = req.files && req.files.image;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Eliminar la imagen anterior en Cloudinary
    if (file && product.images) {
      const public_id = product.images.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(public_id);
    }

    // Subir la nueva imagen a Cloudinary y obtener la URL
    if (file) {
      const result = await cloudinary.uploader.upload(file.tempFilePath);
      body.image = result.secure_url;
    }

    // Actualizar los campos del producto
    product.name = body.name || product.name;
    product.images = body.image || product.images;
    product.available = body.available || product.available;
    product.category = body.category || product.category;
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
      message: "Error updating product",
    });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // get image URLs from the product object
    const imageUrls =
      product.images instanceof Array ? product.images : [product.images];

    // delete images from Cloudinary
    for (const url of imageUrls) {
      const publicId = url.split("/").slice(-1)[0].split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    // delete product from database
    await Product.findByIdAndDelete(id);

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error deleting product",
    });
  }
};

module.exports = {
  postProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
  searchByName
};
