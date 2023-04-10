const { body, validationResult } = require('express-validator');

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

module.exports = { validateFields };
