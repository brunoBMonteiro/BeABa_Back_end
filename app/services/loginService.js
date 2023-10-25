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

const verificarSenha = async (senhaTextoPlano, senhaHashed) => {
  try {
      return await bcrypt.compare(senhaTextoPlano, senhaHashed);
  } catch (error) {
      console.error(error);
      throw error;
  }
};

const hashSenha = async (senha) => {
    const saltRounds = 10;
    return await bcrypt.hash(senha, saltRounds);
};

const decodificarToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const obterIdUsuarioDoToken = (token) => {
    const decoded = decodificarToken(token);
    return decoded.id;
};

module.exports = {
    verificarUsuario,
    verificarSenha,
    hashSenha,
    decodificarToken,
    obterIdUsuarioDoToken
};