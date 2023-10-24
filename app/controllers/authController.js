const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET; // Certifique-se de usar a chave secreta do ambiente

const payload = {
    userId: user.id,  // exemplo de payload
    profile: user.profile
};

const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' }); // Token expira em 2 hora