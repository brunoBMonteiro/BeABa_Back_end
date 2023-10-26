const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function gerarToken(usuario) {
    const payload = {
        userId: usuario.id_usuario,
        profile: usuario.perfil_acesso
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
}

async function verificarSenha(senhaTextoPlano, senhaHashed) {
    return await bcrypt.compare(senhaTextoPlano, senhaHashed);
}

module.exports = {
    gerarToken,
    verificarSenha
};
