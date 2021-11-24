const router = require("express").Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const {updateUser, getUser, getUsers, getUserStats} = require('../controllers/userController')


router.route('/:id').put(verifyTokenAndAuthorization, updateUser)
router.route('/find/:id').get(verifyTokenAndAdmin,getUser)
router.route('/').get(verifyTokenAndAdmin, getUsers)
router.route('/stats').get(verifyTokenAndAdmin, getUserStats)

module.exports = router;
