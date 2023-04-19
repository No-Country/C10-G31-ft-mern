const User = require("../models/User");

// Crear una nueva dirección en un usuario existente
const createDirection = async (req, res) => {
  const { userId } = req.params;
  const { street, city, state, country, zip, reference } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const newAddress = {
      street,
      city,
      state,
      country,
      zip,
      reference,
    };

    user.directions.push(newAddress);
    await user.save();

    return res.status(201).json({
      message: "Dirección creada correctamente",
      address: newAddress,
    });
  } catch (error) {
 
    return res
      .status(500)
      .json({ message: "Error creando la dirección", error: error.message });
  }
};

// Obtener una dirección de un usuario
const getDirectionsById = async (req, res) => {
  const { userId, directionId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const address = user.directions.id(directionId);
    if (!address) {
      return res.status(404).json({ message: "Dirección no encontrada" });
    }

    return res.status(200).json({ address });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error obteniendo la dirección", error: error.message });
  }
};

// Actualizar una dirección de un usuario
const updateDirectionById = async (req, res) => {
  const { userId, directionId } = req.params;
  const { street, city, state, country, zip, reference } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const address = user.directions.id(directionId);
    if (!address) {
      return res.status(404).json({ message: "Dirección no encontrada" });
    }

    address.street = street || address.street;
    address.city = city || address.city;
    address.state = state || address.state;
    address.country = country || address.country;
    address.zip = zip || address.zip;
    address.reference = reference || address.reference;

    await user.save();

    return res.status(200).json({
      message: "Dirección actualizada correctamente",
      address,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error actualizando la dirección",
      error: error.message,
    });
  }
};

// Eliminar una dirección de un usuario
const deleteDirectionById = async (req, res) => {
  const { userId, directionId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const address = user.directions.id(directionId);
    if (!address) {
      return res.status(404).json({ message: "Dirección no encontrada" });
    }

    await User.updateOne(
      { _id: userId },
      { $pull: { directions: { _id: directionId } } }
    );

    return res
      .status(200)
      .json({ message: "Dirección eliminada correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error eliminando la dirección", error: error.message });
  }
};

module.exports = {
  createDirection,
  updateDirectionById,
  deleteDirectionById,
  getDirectionsById,
};
