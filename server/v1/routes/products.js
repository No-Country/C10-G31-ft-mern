const router = require('express').Router();

const producControllers = require('../../controllers/productControllers')

router.route('/')
  .get(producControllers.getAllProducts)
  .post(producControllers.postProduct);

router.route('/:id')
  .get(producControllers.getProductById)
  .delete(producControllers.deleteProduct);

module.exports = router;