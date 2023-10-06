const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/usuario');

// Função para lidar com o login
exports.login = async (req, res) => {
  try {
    // Validação dos campos de entrada (por exemplo, email e senha)
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Verificar se o usuário existe no banco de dados
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Verificar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar um token JWT para o usuário autenticado
    const token = jwt.sign({ userId: user._id }, 'sua-chave-secreta', { expiresIn: '1h' });

    // Enviar o token de volta para o cliente
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
