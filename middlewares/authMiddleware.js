const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                // Melhorando a resposta de erro
                return res.status(403).json({ error: 'Token inválido ou expirado' });
            }

            req.user = user;
            next();
        });
    } else {
        // Melhorando a resposta de erro
        res.status(401).json({ error: 'Token não fornecido' });
    }
}

module.exports = authenticateJWT;