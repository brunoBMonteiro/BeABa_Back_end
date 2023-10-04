const { Template } = require('../models');

const cadastrarTemplate = async (req, res) => {
  try {
    const { nome_template, extensao_template, data_cadastrado, status, quantidade_linhas, campos_template, id_usuario_cadastrado } = req.body;

    const template = await Template.create({
      nome_template,
      extensao_template,
      data_cadastrado,
      status,
      quantidade_linhas,
      campos_template,
      id_usuario_cadastrado,
    });

    return res.status(201).json({ mensagem: 'Template cadastrado com sucesso', template });
  } catch (error) {
    console.error('Erro ao cadastrar o template:', error);
    return res.status(500).json({ erro: 'Ocorreu um erro ao cadastrar o template' });
  }
};

const listarTemplates = async (req, res) => {
  try {
    const templates = await Template.findAll();
    return res.status(200).json(templates);
  } catch (error) {
    console.error('Erro ao listar os templates:', error);
    return res.status(500).json({ erro: 'Ocorreu um erro ao listar os templates' });
  }
};



module.exports = {
  cadastrarTemplate,
  listarTemplates,
};
