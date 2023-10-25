const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;

console.log("JWT_SECRET no authService:", JWT_SECRET); // Log para confirmar o valor de JWT_SECRET

function gerarToken(usuario) {
    console.log("Gerando token para o usuário:", usuario); // Log para verificar os valores do usuário

    const payload = {
        userId: usuario.id_usuario,
        profile: usuario.perfil_acesso
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
    console.log("Token gerado:", token); // Log do token gerado

    // Teste de verificação do token
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log("Token decodificado:", decoded);
    } catch (err) {
        console.error("Erro ao verificar o token:", err);
    }

    return token;
}

async function verificarSenha(senhaTextoPlano, senhaHashed) {
    return await bcrypt.compare(senhaTextoPlano, senhaHashed);
}

module.exports = {
    gerarToken,
    verificarSenha
};