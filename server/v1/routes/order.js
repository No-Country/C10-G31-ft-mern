const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/orderControllers');
const authMiddleware = require('../../middlewares/authMiddleware');
const { validateOrder } = require('../../helpers/validateFields');


router.post('/orders', validateOrder, orderController.createOrder);
router.get('/orders', orderController.getOrders);
router.get('/orders/:orderId', orderController.getOrderById);
router.patch('/orders/:orderId', validateOrder, authMiddleware, orderController.updateOrderById);
router.delete('/orders/:orderId', authMiddleware, orderController.deleteOrderById);

module.exports = router;
