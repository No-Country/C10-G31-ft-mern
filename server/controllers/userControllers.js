const User = require("../models/User");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const generateToken = require("../helpers/generaTokens");

const login = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;

    // Verificar si el usuario existe
    const userExists = await User.exists({ email });
    if (!userExists) {
      return res
        .status(401)
        .json({ message: "Correo o contraseña incorrectos." });
    }

    // Verificar si la contraseña es correcta
    const user = await User.findOne({ email });
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res
        .status(401)
        .json({ message: "Correo o contraseña incorrectos." });
    }

    // Generar y devolver el token
    const token = generateToken(user);

    return res.status(200).json({ token, email: user.email, id: user._id });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor.", error });
  }
};

//obtener el perfil del usuario por el id recibido del token
const getProfile = async (req, res) => {
  console.log(req.user._id)
  try {
    const { _id } = req.user;
    const user = await User.findById(_id).populate("directions").populate("orders");
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: "user no encontrado" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({
      message: "Error buscando los usuarios por ID ",
    });
  }
}
  

// Crear un user
const createUser = async (req, res, next) => {
  // Validación de errores

  // Extracción de datos del cuerpo de la solicitud
  const {
    name,
    lastName,
    email,
    password,
    phone,
    profileImage,
    isActive,
    role,
    directions,
    dateOfBirth,
    gender,
    occupation,
    interests,
    orders,
  } = req.body;

  try {
    // Verificación de si ya existe un user con el mismo correo electrónico
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está registrado" });
    }

    // Creación de un nuevo user
    const newUser = new User({
      name,
      lastName,
      email,
      password,
      phone,
      profileImage,
      isActive,
      role,
      directions,
      dateOfBirth,
      gender,
      occupation,
      interests,
      orders,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User creado exitosamente", user: newUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creando el nuevo usuario", mess: error.message });
  }
};

// Obtener todos los users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).populate("directions");
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({
      message: "Error buscando los usuarios",
      mess: error.message,
    });
  }
};

// Obtener un user por id
const getUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate("directions").populate("orders");
    if (!user) {
      return res.status(404).json({ message: "user no encontrado" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({
      message: "Error buscando los usuarios por ID ",
    });
  }
};

// Editar un user por id
const updateUserById = async (req, res) => {
  const { userId } = req.params;

  const {
    name,
    lastName,
    email,
    password,
    newPassword,
    phone,
    profileImage,
    isActive,
    role,
    directions,
    dateOfBirth,
    gender,
    occupation,
    interests,
    orders,
  } = req.body;

  try {
    // Verificación de si el user existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User no encontrado" });
    }

    // Verificar si se proporcionó una nueva contraseña
    if (newPassword) {
      // Validar que la nueva contraseña cumpla con los requisitos necesarios
      if (
        newPassword.length < 8 ||
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
          newPassword
        )
      ) {
        return res.status(400).json({
          message:
            "La nueva contraseña debe tener al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial: @, $, !, %, *, ? o & y tener al menos 8 caracteres",
        });
      }

      // Verificar que la contraseña actual sea correcta
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res
          .status(401)
          .json({ message: "La contraseña actual es incorrecta" });
      }

      // Actualizar la contraseña en la base de datos
      user.password = newPassword;
    }

    // Actualización de los datos del user
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    //(user.password = password),
    (user.phone = phone),
      (user.profileImage = profileImage),
      (user.isActive = isActive),
      (user.role = role),
      (user.directions = directions),
      (user.dateOfBirth = dateOfBirth),
      (user.gender = gender),
      (user.occupation = occupation),
      (user.interests = interests),
      (user.orders = orders);
    await user.save();

    return res
      .status(200)
      .json({ message: "User actualizado exitosamente", user });
  } catch (error) {
    return res.status(500).json({
      error,
      message: "error actualizando el usuario por ID",
      mess: error.message,
    });
  }
};

// Eliminar un user por id
const deleteUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    // Verificación de si el user existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User no encontrado" });
    }

    // Eliminación del user
    await User.findByIdAndDelete(userId);

    return res.status(200).json({ message: "User eliminado exitosamente" });
  } catch (error) {
    return res.status(500).json({
      error,
      message: "Error eliminando el usuario por ID",
      mess: error.message,
    });
  }
};

module.exports = {
  login,
  getProfile,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
