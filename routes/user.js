const router = require("express").Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


router.route('/:id').put(verifyTokenAndAuthorization)
router.route('/find/:id').get(verifyTokenAndAdmin)
router.route('/').get(verifyTokenAndAdmin)
router.route('/stats').get(verifyTokenAndAdmin)

module.exports = router;
