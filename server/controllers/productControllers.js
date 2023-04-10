const Product = require('../models/Product');

const getAllProducts = async(req, res) => {
  const searchOnDB = await Product.find({});

  res.status(200).json(searchOnDB);
};

const getProductById = async(req, res) => {
  const id = req.params.id;

  const productById = await Product.findById(id);

  res.json(productById);
};

const postProduct = async(req, res) => {
  const {...body} = req.body;
  
  const productDB = await Product.findOne({name: body.name});

  if(productDB) {
    return res.status(400).json({
      message: `The product ${productDB.name} exist`
    })
  }

  const data = {
    name: body.name,
    image: body.image,
    available: body.available,
    category: body.category,
    price: body.price,
    seller: req.body.seller
  };

  const product = new Product(data);
  
  //save in DB
  await product.save();

  res.status(201).json(product);
};

const editProduct = async(req, res) => {
  const id = req.params.id;
  const body = req.body;
  
  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }

    // update product fields
    product.name = body.name || product.name;
    product.image = body.image || product.image;
    product.available = body.available || product.available;
    product.category = body.category || product.category;
    product.price = body.price || product.price;
    product.seller = body.seller || product.seller;

    // save updated product to database
    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating product'
    });
  }
};


const deleteProduct = async(req, res) => {
  const id = req.params.id;

  const deleteProduct = await Product.findByIdAndDelete(id);

  res.json(deleteProduct);
};

module.exports = {
  postProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct
};