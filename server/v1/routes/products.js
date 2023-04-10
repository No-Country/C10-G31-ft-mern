const router = require('express').Router();

const producControllers = require('../../controllers/productControllers')

router.route('/')
  .get(producControllers.getAllProducts)
  .post(authMiddleware, producControllers.postProduct);

router.route('/:id')
  .get(producControllers.getProductById)
  .patch(authMiddleware, producControllers.editProduct)
  .delete(authMiddleware, producControllers.deleteProduct);

module.exports = router;