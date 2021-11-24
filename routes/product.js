const router = require('express').Router();

const {
	createProduct,
	updateProduct,
	deleteProduct,
	fetchProduct,
	fetchAllProducts
} = require('../controllers/productController');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

router.route('/').post(verifyTokenAndAdmin, createProduct);
router.route('/:id').put(verifyTokenAndAdmin, updateProduct);
router.route('/:id').delete(verifyTokenAndAdmin, deleteProduct);
router.route('/find/:id').get(fetchProduct);
router.route('/').get(fetchAllProducts);

module.exports = router;
