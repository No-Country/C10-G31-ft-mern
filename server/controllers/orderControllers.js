const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const Direction = require("../models/User");

// Función para crear una nueva orden
exports.createOrder = async (req, res) => {
  try {
    // Obtener el cliente desde el token
    const clientId = req.user._id;

    // Obtener los productos de la solicitud
    const { productos, direction, total } = req.body;
    console.log(productos.length);
    // Verificar si el cliente existe
    const clientExists = await User.findById(clientId);
    if (!clientExists) {
      return res.status(404).json({ message: "No se encontró el cliente." });
    }
    
    // Crear una nueva orden
    const newOrder = await Order.create({
      client: clientId,
      direction:direction,
      total,
    });
   
    await productos.forEach(element => {
      
      const pro = {
        product: element.id,
        quantity: element.quantity,
        price: element.price
      }
      console.log(pro)
     newOrder.products.push(pro)

    });
    console.log(newOrder)

    // Guardar la orden en la base de datos
    const ordersaved = await newOrder.save();
    // Agregar la orden al cliente
    clientExists.orders.push(ordersaved._id)
    // Guardar el cliente en la base de datos
    await clientExists.save()

    
    return res.status(201).json(newOrder);
  } catch (error) {

    return res.status(500).json({ message: "Internal server error", mss:error.message});
  }
};

// Función para obtener todas las ordenes
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las ordenes." });
  }
};

// Función para obtener una orden por su ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate("client", "name").populate("products");
    if (!order) {
      return res.status(404).json({ message: "No se encontró la orden." });
    }
    console.log(order)
    return res.json(order);
  } catch (error) {
   
    return res.status(500).json({ message: "Error al obtener la orden.", mss: error.message });
  }
};

// Función para actualizar una orden por su ID
exports.updateOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return res.status(404).json({ message: "No se encontró la orden." });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la orden." });
  }
};

// Función para eliminar una orden por su ID
exports.deleteOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: "No se encontró la orden." });
    }
    res.json({ message: "Orden eliminada exitosamente." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la orden." });
  }
};
