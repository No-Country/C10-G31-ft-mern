const router = require('express').Router();

const producControllers = require('../../controllers/productControllers')
const authMiddleware = require('../../middlewares/authMiddleware')
const {validateProductData} = require('../../helpers/validateFields')

router.route('/')
  .get(producControllers.getAllProducts)
  .post(authMiddleware, validateProductData, producControllers.postProduct);

router.route('/:id')
  .get(producControllers.getProductById)
  .patch(authMiddleware, validateProductData, producControllers.editProduct)
  .delete( authMiddleware, producControllers.deleteProduct);

router.route('/name?')
  .get(producControllers.searchByName)

module.exports = router;