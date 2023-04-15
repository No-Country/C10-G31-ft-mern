const User = require("../models/User");
const path = require('path');
const fs = require("fs");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const generateToken = require("../helpers/generaTokens");
const imageDefaultPath = path.join(__dirname,'../assets/usuario.png')
//const imageDefaultPaths = require("../assets/")
const imageBuffer = fs.readFileSync(imageDefaultPath);
//const profileImageDefault = imageBuffer.toString("base64");

const login = async (req, res) => {
  try {
 
    // Verificar si el usuario existe
    const user = await User.findOne({ email: req.body.email });
    const {name, email, role} = user
    if (!user) {
      return res
        .status(401)
        .json({ message: "Correo o contraseña incorrectos." });
    }

    // Verificar si la contraseña es correcta
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(isValidPassword);
    if (!isValidPassword) {
      return res
        .status(401)
        .json({ message: "Correo o contraseña incorrectos." });
    }

    // Generar y devolver el token
    const token = generateToken(user);
    console.log(token);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};

// Crear un user
const createUser = async (req, res, next) => {
  // Validación de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

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
    console.log(error)
    return res
      .status(500)
      .json({ message: "Error creando el nuevo usuario", mess: error.message });
  }
};

// Obtener todos los users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find ();
    return res.status(200).json({ users });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Error buscando los usuarios",
        mess: error.message
      });
  }
};

// Obtener un user por id
const getUserById = async (req, res, next) => {
  const { userId } = req.params;
  console.log(req.params)

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user no encontrado" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({
        error,
        message:
          "Error buscando los usuarios por ID ",
        mess: error.message
      });
  }
};

// Editar un user por id
const updateUserById = async (req, res, next) => {
  // Validación de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log(req.paramas)
  const { userId } = req.params;
  console.log(userId)
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
    // Verificación de si el user existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User no encontrado" });
    }

    // Actualización de los datos del user
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    (user.password = password),
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
    return res
      .status(500)
      .json({
        error,
        message:
          "error actualizando el usuario por ID",
        mess: error.message
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
    console.log(error)
    return res
      .status(500)
      .json({
        error,
        message:
          "Error eliminando el usuario por ID",
        mess: error.message
      });
  }
};



module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
