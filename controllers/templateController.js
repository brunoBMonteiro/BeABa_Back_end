// Importe o modelo Template que você criou anteriormente
const { Template } = require('../models');

// Função para cadastrar um novo template
const cadastrarTemplate = async (req, res) => {
  try {
    // Extraia os dados do corpo da solicitação
    const { nome_template, extensao_template, data_cadastrado, status, quantidade_linhas, campos_template, id_usuario_cadastrado } = req.body;

    // Crie um novo template no banco de dados
    const template = await Template.create({
      nome_template,
      extensao_template,
      data_cadastrado,
      status,
      quantidade_linhas,
      campos_template,
      id_usuario_cadastrado,
    });

    // Envie uma resposta de sucesso
    return res.status(201).json({ mensagem: 'Template cadastrado com sucesso', template });
  } catch (error) {
    // Em caso de erro, envie uma resposta de erro
    console.error('Erro ao cadastrar o template:', error);
    return res.status(500).json({ erro: 'Ocorreu um erro ao cadastrar o template' });
  }
};

// Função para listar todos os templates
const listarTemplates = async (req, res) => {
  try {
    // Consulte todos os templates no banco de dados
    const templates = await Template.findAll();

    // Envie uma resposta com a lista de templates
    return res.status(200).json(templates);
  } catch (error) {
    // Em caso de erro, envie uma resposta de erro
    console.error('Erro ao listar os templates:', error);
    return res.status(500).json({ erro: 'Ocorreu um erro ao listar os templates' });
  }
};

// Outras funções para atualizar ou excluir templates podem ser adicionadas aqui

module.exports = {
  cadastrarTemplate,
  listarTemplates,
  // Adicionar outras funções aqui
};
