const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para o login
router.post('/login', authController.login);

module.exports = router;