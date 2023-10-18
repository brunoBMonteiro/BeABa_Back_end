const Usuario  = require('../models/usuario.js');

const cadastrarUsuario = async (req, res) => {
  try {
    const {
      matricula,
      email,
      senha,
      nome_usuario,
      foto_url,
      perfil_acesso,
    } = req.body;

    const usuario = await Usuario.create({
      matricula,
      email,
      senha,
      nome_usuario,
      foto_url,
      perfil_acesso,
    });

    return res
      .status(201)
      .json({ mensagem: 'Usuário cadastrado com sucesso', usuario });
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error);
    return res
      .status(500)
      .json({ erro: 'Ocorreu um erro ao cadastrar o usuário' });
  }
};

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro ao listar os usuários:', error);
    return res
      .status(500)
      .json({ erro: 'Ocorreu um erro ao listar os usuários' });
  }
};

const listarUsuarioMatricula = async (req, res) => {
  const matricula = req.params.matricula;

  try {
    const usuario = await Usuario.findOne({ where: { matricula } });

    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar o usuário' });
  }
};

const deletarUsuarioMatricula = async (req, res) => {
  const matricula = req.params.matricula;

  try {
    const usuario = await Usuario.findOne({ where: { matricula } });

    if (usuario) {
      await usuario.destroy();
      res.json({ message: 'Usuário excluído com sucesso' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o usuário' });
  }
};

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
  listarUsuarioMatricula,
  deletarUsuarioMatricula,
};
