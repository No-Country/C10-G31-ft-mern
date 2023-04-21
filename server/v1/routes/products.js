const router = require('express').Router();

const producControllers = require('../../controllers/productControllers')
const authMiddleware = require('../../middlewares/authMiddleware')
const {validateProductData, validateQuery} = require('../../helpers/validateFields');
//tarer controlador de variaciones
const variationControllers = require('../../controllers/variationControllers');
//const authRoleAdmin = require('../../middlewares/authRole');
//const authRoleClient = require('../../middlewares/authRole');


router.route('/search')
  .get(validateQuery, producControllers.searchByName);

router.route('/:id')
  .get(producControllers.getProductById)
  .patch(authMiddleware, validateProductData, producControllers.editProduct)
  .delete(authMiddleware, producControllers.deleteProduct);

router.route('/')
  .get(producControllers.getAllProducts)
  .post(authMiddleware, validateProductData, producControllers.postProduct);

//crear variación
router.post('/:id/variation', authMiddleware, variationControllers.createVariation );

  


module.exports = router;