
const express = require('express');
const router = require("express").Router();


const { registerUser, loginUser } = require('../controllers/authController');

router.route('/register').post(registerUser)
router.route('/loging').post(loginUser)

module.exports = router;
