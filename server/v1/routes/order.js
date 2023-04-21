const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/orderControllers');
const authMiddleware = require('../../middlewares/authMiddleware');
//const { validateOrder } = require('../../helpers/validateFields');


router.post('/',  authMiddleware, orderController.createOrder);
router.get('/', orderController.getOrders);
router.get('/:orderId', orderController.getOrderById);
router.patch('/:orderId',  authMiddleware, orderController.updateOrderById);
router.delete('/:orderId', authMiddleware, orderController.deleteOrderById);

module.exports = router;
