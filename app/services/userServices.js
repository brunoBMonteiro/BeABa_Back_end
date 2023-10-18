const Usuario = require('../models/usuario.js');

const cadastrarUsuario = async (dadosUsuario) => {
  try {
    return await Usuario.create(dadosUsuario);
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error);
    throw new Error('Ocorreu um erro ao cadastrar o usuário');
  }
};

const listarUsuarios = async () => {
  try {
    return await Usuario.findAll();
  } catch (error) {
    console.error('Erro ao listar os usuários:', error);
    throw new Error('Ocorreu um erro ao listar os usuários');
  }
};

const buscarUsuarioPorMatricula = async (matricula) => {
  try {
    return await Usuario.findOne({ where: { matricula } });
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao buscar o usuário');
  }
};

const excluirUsuarioPorMatricula = async (matricula) => {
  try {
    const usuario = await Usuario.findOne({ where: { matricula } });
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
    await usuario.destroy();
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao excluir o usuário');
  }
};

const atualizarTipoAcesso = async (matricula, novoTipoAcesso) => {
  // Lista de tipos de acesso válidos
  const tiposAcessoValidos = ["Administrador", "Gestor", "Padrão"];

  if (!tiposAcessoValidos.includes(novoTipoAcesso)) {
    throw new Error('Tipo de acesso inválido. Deve ser "Administrador", "Gestor" ou "Padrão".');
  }

  try {
    const usuario = await Usuario.findOne({ where: { matricula } });
    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    usuario.perfil_acesso = novoTipoAcesso;
    await usuario.save();
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao atualizar o tipo de acesso');
  }
};

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
  buscarUsuarioPorMatricula,
  excluirUsuarioPorMatricula,
  atualizarTipoAcesso,
};
