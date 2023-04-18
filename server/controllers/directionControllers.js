const Direction = require('../models/Direction')

const createDirection = async (req, res) => {
  const { address, city, country, postalCode, reference } = req.body;

  try {
    const direction = await Direction.create({ address, city, country, postalCode, reference, user });
    res.status(201).json(direction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getDirectionsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const directions = await Direction.find({ user: userId });
    res.status(200).json(directions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateDirectionById = async (req, res) => {
  console.log(req.params)
  const { directionId } = req.params;
  const { address, city, country, postalCode, reference } = req.body;

  try {
    const direction = await Direction.findByIdAndUpdate(
      directionId,
      { address, city, country, postalCode, reference },
      { new: true }
    );
    if (!direction) {
      return res.status(404).json({ message: "La dirección no fue encontrada" });
    }
    res.status(200).json(direction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDirectionById = async (req, res) => {
  const { directionId } = req.params;

  try {
    const direction = await Direction.findByIdAndDelete(directionId);
    if (!direction) {
      return res.status(404).json({ message: "La dirección no fue encontrada" });
    }
    res.status(
      200
    ).json({ message: "La dirección fue eliminada con éxito" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createDirection,
  getDirectionsByUser,
  updateDirectionById,
  deleteDirectionById,
};
