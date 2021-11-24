

const router = require('express').Router();
const { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders } = require('../controllers/orderController');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

router.route('/').post(verifyToken, createOrder)
router.route('/:id').put(verifyTokenAndAdmin, updateOrder)
router.route('/:id').delete(verifyTokenAndAdmin, deleteOrder)
router.route('/find/:userId').get(verifyTokenAndAuthorization, getUserOrder)
router.route('/').get(verifyTokenAndAdmin, getAllOrders)


module.exports = router;
