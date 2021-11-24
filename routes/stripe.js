const router = require("express").Router();


const { stripePayment } = require("../controllers/stripeController");

router.route('/').post(stripePayment)


module.exports = router;
