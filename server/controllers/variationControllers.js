const Product = require('../models/Product')


//crear variación de productos
const createVariation = async (req, res) => {
  try {
    console.log(req.params)
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product)
    console.log(id)
    console.log(req.body)
    const variation = await req.body
    console.log(variation)
    console.log(product.variations)
    //map de variation
    
    variation.map((item) => {
      console.log(item)
       product.variations.push(item)
    })

    //guardar producto
    await product.save()
    //devolver producto
    return res.status(201).json(product);

    /*const { name, price } = req.body;
    const product = await Product.findById(id);
 
    if (!product) {
      return res.status(404).json({ message: 'No se encontró el producto.' });
    }
    const newVariation = {
      name,
      price,
      quantity,
    };
    product.variations.push(newVariation);
    await product.save();
    return res.status(201).json({
      message: 'Variación creada correctamente',
      variation: newVariation,
    });*/
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error creando la variación', error: error.message });
  }
}

//obtener todas las variaciones de un producto
const getVariations = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'No se encontró el producto.' });
    }
    res.json(product.variations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las variaciones.' });
  }
}

//obtener una variación de un producto
exports.getVariation = async (req, res) => {

 
  










}

//exportar variaciones
module.exports = {
  createVariation,
  getVariations,
}