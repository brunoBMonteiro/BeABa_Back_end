const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function verificarJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                console.error("Erro na verificação do token:", err); // Log do erro
                return res.status(401).json({ error: 'Token inválido ou expirado' });
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json({ error: 'Token não fornecido' });
    }
}

module.exports = verificarJWT;