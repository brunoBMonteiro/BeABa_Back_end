const { Template } = require('../models');


// Cadastrar template
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

// Listar todos templates
const listarTemplates = async (req, res) => {
  try {
    const templates = await Template.findAll();
    return res.status(200).json(templates);
  } catch (error) {
    console.error('Erro ao listar os templates:', error);
    return res.status(500).json({ erro: 'Ocorreu um erro ao listar os templates' });
  }
};

// Buscar por ID
async function getTemplateById(req, res) {
  const { id } = req.params;

  try {
    const template = await Template.findByPk(id);

    if (!template) {
      return res.status(404).json({ erro: 'Template não encontrado' });
    }

    res.json({ template });
  } catch (error) {
    console.error('Erro ao obter o template por ID:', error);
    res.status(500).json({ erro: 'Ocorreu um erro ao obter o template por ID' });
  }
}

module.exports = {
  cadastrarTemplate,
  listarTemplates,
  getTemplateById
};
