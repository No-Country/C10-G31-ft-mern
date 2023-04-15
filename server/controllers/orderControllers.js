const Order = require('../models/Order');

// Función para crear una nueva orden
exports.createOrder = async (req, res) => {
  try {
    const order = new Order({
      products: req.body.products,
      client: req.body.client,
      direction: req.body.direction,
      total: req.body.total
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la orden.' });
  }
};

// Función para obtener todas las ordenes
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las ordenes.' });
  }
};

// Función para obtener una orden por su ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: 'No se encontró la orden.' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la orden.' });
  }
};

// Función para actualizar una orden por su ID
exports.updateOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, {
      new: true,
      runValidators: true
    });
    if (!order) {
      return res.status(404).json({ message: 'No se encontró la orden.' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la orden.' });
  }
};

// Función para eliminar una orden por su ID
exports.deleteOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: 'No se encontró la orden.' });
    }
    res.json({ message: 'Orden eliminada exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la orden.' });
  }
};
