const express = require('express');
const router = express.Router();

const {
    fazerLogin,
} = require('../app/controllers/loginController');

router.post('/', fazerLogin);

module.exports = router;