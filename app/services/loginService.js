const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const verificarUsuario = async (email) => {
  try {
    return await Usuario.findOne({ where: { email } });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const verificarSenha = async (senha, hashSenha) => {
  try {
    return await bcrypt.compare(senha, hashSenha);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const gerarToken = (usuario) => {
  return jwt.sign({ id: usuario.id, perfil_acesso: usuario.perfil_acesso }, 'seuSegredo');
};

const hashSenha = async (senha) => {
    const saltRounds = 10;
    return await bcrypt.hash(senha, saltRounds);
};


module.exports = {
  verificarUsuario,
  verificarSenha,
  gerarToken,
  hashSenha
};