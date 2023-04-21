const Order = require('../models/Order');
const User = require('../models/User')

// Función para crear una nueva orden
exports.createOrder = async (req, res) => {
  try {
    //obtener user.id del token
    const { _id } = req.user;
    //buscar user por id
    const user = User.findById(_id)
    console.log(user)
    //si no existe user
    if (!user) {
      return res.status(404).json({ message: 'No se encontró el usuario.' });
    }
    //crear nueva orden
    const order = new Order({
      products: req.body.products,
      client: user._id,
      direction: req.body.direction,
      total: req.body.total
    });
    console.log(order)
    //guardar orden
    const savedOrder = await order.save();
    //agregar orden al usuario
    user.orders.push(savedOrder)
    //guardar usuario
    await user.save()
    //devolver orden
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
