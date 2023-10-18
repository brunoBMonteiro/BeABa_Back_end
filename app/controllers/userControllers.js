const userServices = require('../services/userServices');

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

    const usuario = await userServices.cadastrarUsuario({
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
    const usuarios = await userServices.listarUsuarios();
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
    const usuario = await userServices.buscarUsuarioPorMatricula(matricula);

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
    await userServices.excluirUsuarioPorMatricula(matricula);
    res.json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao excluir o usuário' });
  }
};

const alterarTipoAcesso = async (req, res) => {
  const { matricula } = req.params;
  const { novoTipoAcesso } = req.body;

  try {
    await userServices.atualizarTipoAcesso(matricula, novoTipoAcesso);
    res.status(200).json({ mensagem: 'Tipo de acesso atualizado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao atualizar o tipo de acesso' });
  }
};

module.exports = {
  cadastrarUsuario,
  listarUsuarios,
  listarUsuarioMatricula,
  deletarUsuarioMatricula,
  alterarTipoAcesso,
};
