const loginService = require('../services/loginService');
const authService = require('../services/authService');

const fazerLogin = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await loginService.verificarUsuario(email);

    if (!usuario) {
      return res.status(401).json({ mensagem: 'E-mail ou senha inválidos' });
    }

    const senhaCorreta = await loginService.verificarSenha(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ mensagem: 'E-mail ou senha inválidos' });
    }

    const token = authService.gerarToken(usuario);

    return res.status(200).json({ 
      mensagem: 'Login bem-sucedido', 
      token, 
      perfil: usuario.perfil_acesso, 
      nome: usuario.nome_usuario,
      foto: usuario.foto_url
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Ocorreu um erro durante o login' });
  }
};

module.exports = {
  fazerLogin,
};