const { body, validationResult } = require('express-validator');

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email) {
    errors.push({ message: "Email is required." });
  } else if (email.length > 100) {
    errors.push({ message: "Email should be at most 100 characters." });
  }

  if (!password) {
    errors.push({ message: "Password is required." });
  } else if (password.length < 8) {
    errors.push({ message: "Password should be at least 8 characters." });
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
    errors.push({ message: "Password should have at least one uppercase letter, one lowercase letter, one digit, and one special character: @, $, !, %, *, ?, or &." });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors, message:"error en loginValidte" });
  }

  next();
}

const validateProductData = (req, res, next) => {
 
  const { name, description, available, category, attributes, variations, price } = req.body;
  const {image} = req.files
  const myavailable = Boolean(available)
  const errors = [];

  if (!name) {
    errors.push({ message: "Name is required." });
  } else if (name.length > 100) {
    errors.push({ message: "Name should be at most 100 characters." });
  }

  if (!description) {
    errors.push({ message: "Description is required." });
  } else if (description.length > 1000) {
    errors.push({ message: "Description should be at most 1000 characters." });
  }

  if (!image || image.length === 0) {
    errors.push({ message: "At least one image is required." });
  }

  if (typeof myavailable !== "boolean") {
    errors.push({ message: "Available should be a boolean value." });
  }

  if (!category || category.length === 0) {
    errors.push({ message: "At least one category is required." });
  }
  
  if (variations){
    if (variations.length === 0) {
      errors.push({ message: "At least one variation is required." });
    } else {
      variations.forEach((variation, index) => {
        if (!variation.name) {
          errors.push({ message: `Variation name is required in variation ${index + 1}.` });
        } else if (variation.name.length > 100) {
          errors.push({ message: `Variation name should be at most 100 characters in variation ${index + 1}.` });
        }
  
        if (!variation.price || variation.price < 0) {
          errors.push({ message: `Variation price should be a positive number in variation ${index + 1}.` });
        }
      });
    }
  }

  if(attributes) {
    if (attributes.length === 0) {
      errors.push({ message: "At least one attribute is required." });
    } else {
      attributes.forEach((attribute, index) => {
        if (!attribute.name) {
          errors.push({ message: `Attribute name is required in attribute ${index + 1}.` });
        } else if (attribute.name.length > 100) {
          errors.push({ message: `Attribute name should be at most 100 characters in attribute ${index + 1}.` });
        }
  
        if (!attribute.value) {
          errors.push({ message: `Attribute value is required in attribute ${index + 1}.` });
        } else if (attribute.value.length > 100) {
          errors.push({ message: `Attribute value should be at most 100 characters in attribute ${index + 1}.` });
        }
      });
    }
  }

  if (!price || price < 0) {
    errors.push({ message: "Price should be a positive number." });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors, message: "error en validate product"});
  }

  next();
};

const validateCreateandUdpateUser = (req, res, next)=> { 
  const { name, lastName, email, password, phone } = req.body;
  const errors = [];

  if (!name) {
    errors.push({ message: "Name is required." });
  } else if (name.length > 100) {
    errors.push({ message: "Name should be at most 100 characters." });
  }

  if (!lastName) {
    errors.push({ message: "Last name is required." });
  } else if (lastName.length > 100) {
    errors.push({ message: "Last name should be at most 100 characters." });
  }

  if (!email) {
    errors.push({ message: "Email is required." });
  } else if (email.length > 100) {
    errors.push({ message: "Email should be at most 100 characters." });
  }

  if (!password) {
    errors.push({ message: "Password is required." });
  } else if (password.length < 8) {
    errors.push({ message: "Password should be at least 8 characters." });
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
    errors.push({ message: "Password should have at least one uppercase letter, one lowercase letter, one digit, and one special character: @, $, !, %, *, ?, or &." });
  }

  if (!phone) {
    errors.push({ message: "Phone is required." });
  } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(phone)) {
    errors.push({ message: "Phone must be a valid international phone number, must be the character '+' and must be 1 to 14 numbers" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors, message: "error en validate and create user"});
  }

  next();
}

// Función validadora para la creación de una nueva orden
 const validateOrder = async (req, res, next) => {
  try {
    // Verificar que se haya proporcionado una lista de productos
    if (!req.body.products || req.body.products.length === 0) {
      return res.status(400).json({ message: 'Se debe proporcionar al menos un producto.' });
    }

    // Verificar que cada producto tenga una cantidad y un precio válido
    for (let i = 0; i < req.body.products.length; i++) {
      const product = req.body.products[i];
      if (!product.quantity || product.quantity < 1) {
        return res.status(400).json({ message: 'La cantidad del producto debe ser mayor que cero.' });
      }
      if (!product.price || product.price < 0) {
        return res.status(400).json({ message: 'El precio del producto debe ser mayor o igual que cero.' });
      }
    }

    // Verificar que se haya proporcionado un cliente y una dirección válidos
    if (!req.body.client || !req.body.direction) {
      return res.status(400).json({ message: 'Se deben proporcionar un cliente y una dirección válidos.' });
    }

    // Verificar que el total sea un número válido
    if (!req.body.total || req.body.total < 0) {
      return res.status(400).json({ message: 'El total debe ser mayor o igual que cero.' });
    }

    // Si todo está correcto, pasar al siguiente middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al validar la orden.' });
  }
};


const validateFields = (method) => {
  switch (method) {
    case 'post': {
      return [
        body('name').notEmpty().withMessage('El nombre es requerido'),
        body('lastName').notEmpty().withMessage('El apellido es requerido'),
        body('email')
          .notEmpty()
          .withMessage('El correo electrónico es requerido')
          .isEmail()
          .withMessage('Debe ingresar un correo electrónico válido'),
        body('password')
          .notEmpty()
          .withMessage('La contraseña es requerida')
          .isLength({ min: 8 })
          .withMessage('La contraseña debe contener al menos 8 caracteres'),
      ];
    }
    case 'patch': {
      return [
        body('name').notEmpty().withMessage('El nombre es requerido'),
        body('lastName').notEmpty().withMessage('El apellido es requerido'),
        body('email')
          .notEmpty()
          .withMessage('El correo electrónico es requerido')
          .isEmail()
          .withMessage('Debe ingresar un correo electrónico válido'),
        body('isActive').optional().isBoolean().withMessage('isActive debe ser un valor booleano'),
      ];
    }
    default:
      return [];
  }
};

module.exports = { validateFields , validateOrder, validateCreateandUdpateUser,validateLogin, validateProductData};
