
const router = require("express").Router();

const { deleteCart, updateCart, createCart, getUserCart, fetchAllCarts } = require("../controllers/cartController");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


router.route('/').post(verifyToken, createCart)
router.route('/:id').put(verifyTokenAndAuthorization, updateCart)
router.route('/:id').delete(verifyTokenAndAuthorization, deleteCart)
router.route('/find/:userId').get(verifyTokenAndAuthorization, getUserCart)
router.route('/').get(verifyTokenAndAdmin, fetchAllCarts)

module.exports = router;
