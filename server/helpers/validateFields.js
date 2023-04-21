const { body, validationResult } = require('express-validator');

const validator = require('validator');

const timeoutMiddleware = (req, res, next) => {
  const timeoutId = setTimeout(() => {
    res.status(408).json({ message: "Tiempo de espera agotado" });
  }, 5000); // Establecemos el tiempo límite de 5 segundos (5000 milisegundos)

  res.on("finish", () => {
    clearTimeout(timeoutId);
  });

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];
  console.log(typeof(email))

  if (!email) {
    errors.push({ message: "Email es requerido." });
  } else if (!validator.isEmail(email)) {
    errors.push({ message: "Email no tiene un formato válido." });
  } else if (email.length > 100) {
    errors.push({ message: "Email debería ser menor a 100 caracteres." });
  }else if (typeof email !== "string"){
    errors.push({ message: "Email debe ser una cadena de texto." });
  }

  if (!password) {
    errors.push({ message: "Password es requerida." });
  } else if (password.length < 8) {
    errors.push({ message: "Password debería tener al menos 8 caracteres." });
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
    errors.push({ message: "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial: @, $, !, %, *, ? o &." });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors, message:"Error validando el inicio de sesión." });
  }

  next();
}


const validateProductData = (req, res, next) => {
 
  const { name, description, available, category, attributes, variations, price } = req.body;
  const {image} = req.files
  const myavailable = Boolean(available)
  const errors = [];

  if (!name) {
    errors.push({ message: "Nombre es requerido." });
  } else if (name.length > 100) {
    errors.push({ message: "Debería tener menos de 100 caracteres" });
  }

  if (!description) {
    errors.push({ message: "Description is required." });
  } else if (description.length > 1000) {
    errors.push({ message: "Debería tener menos de 1000 caracteres" });
  }

  if (!image || image.length === 0) {
    errors.push({ message: "Al menos una imagen es requerida" });
  }

  if (typeof myavailable !== "boolean") {
    errors.push({ message: "Available debería ser un boolean" });
  }

  if (!category || category.length === 0) {
    errors.push({ message: "Al menos una categoría  es requerida" });
  }
  
  if (variations){
    if (variations.length === 0) {
      errors.push({ message: "Al menos una categoría  es requerida" });
    } else {
      variations.forEach((variation, index) => {
        if (!variation.name) {
          errors.push({ message: `Es requerido el nombre de la variacion ${index + 1}.` });
        } else if (variation.name.length > 100) {
          errors.push({ message: `El nombre de la varación debe ser menor a 100 caracteres ${index + 1}.` });
        }
  
        if (!variation.price || variation.price < 0) {
          errors.push({ message: `El precio debe ser positivo ${index + 1}.` });
        }
      });
    }
  }

  if(attributes) {
    if (attributes.length === 0) {
      errors.push({ message: "Al menos un atributo es requeirdo" });
    } else {
      attributes.forEach((attribute, index) => {
        if (!attribute.name) {
          errors.push({ message: `Requerido el nombre del atributo para ${index + 1}.` });
        } else if (attribute.name.length > 100) {
          errors.push({ message: `El nombre del atributo debería ser menor a 100 caracteres ${index + 1}.` });
        }
  
        if (!attribute.value) {
          errors.push({ message: `los valores de atributo ${index + 1} son requeridos` });
        } else if (attribute.value.length > 100) {
          errors.push({ message: `Los valores de atributos ebería tener menos de 100 caracteres ${index + 1}.` });
        }
      });
    }
  }

  if (!price || price < 0) {
    errors.push({ message: "Precio debería ser positivo" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors, message: "Error validando el producto"});
  }

  next();
};

const validateCreateandUdpateUser = (req, res, next)=> {
  const { name, lastName, email, password, phone } = req.body;
  const errors = [];

  if (!name || name.length > 100) {
    errors.push({ message: "Nombre es requerido y debe tener menos de 100 caracteres" });
  }

  if (!lastName || lastName.length > 100) {
    errors.push({ message: "Apellido es requerido y debe ser menos a 100 caracteres" });
  }

  if (!email || email.length > 100) {
    errors.push({ message: "Email es requerido y debería ser menor a 100 caracteres" });
  }

  if (!password || password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
    errors.push({ message: "La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un dígito y un carácter especial: @, $, !, %, *, ? o & y debe tener más de 8 caracteres." });
  }

  if (!phone || !/^\+(?:[0-9] ?){6,14}[0-9]$/.test(phone)) {
    errors.push({ message: "El teléfono es requerido y debe ser un número de teléfono internacional válido, debe tener el carácter '+' y debe tener de 1 a 14 números." });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors, message: "Error validando crear el usuario."});
  }

  next();
}


// Función validadora para la creación de una nueva orden
/* const validateOrder = async (req, res, next) => {
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
};*/

const validateQuery = async (req, res, next) =>{
 
  const { name } = req.query;
  const errors = [];

  if (!name || name.length === 0) {
    errors.push({ message: "La consulta es requerida" });
  }

  if(!name > 50){
    errors.push({ message: "La consulta debe tener menos de 50 caracteres" });
  }
  const regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if(name === regex){
    errors.push({ message: "La consulta no puede contener caracteres especiales" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors, message: "Error validando la consulta"});
  }


  next();
}


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

module.exports = { timeoutMiddleware, validateFields , validateQuery,  validateCreateandUdpateUser,validateLogin, validateProductData};
