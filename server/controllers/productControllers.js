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

const deleteProduct = async(req, res) => {
  const id = req.params.id;

  const deleteProduct = await Product.findByIdAndDelete(id);

  res.json(deleteProduct);
};

module.exports = {
  postProduct,
  getAllProducts,
  getProductById,
  deleteProduct
};