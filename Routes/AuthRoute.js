const express = require('express');
const { register, verifyEmail } = require('../Controllers/AuthController.js');

const router = express.Router();
router.use(express.json());

router.post('/register',register)
router.post('/verify-email',verifyEmail)

module.exports = router