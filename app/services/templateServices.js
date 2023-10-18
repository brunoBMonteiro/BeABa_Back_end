const Template = require('../models/template');

async function cadastrarTemplate(templateData) {
  try {
    const template = await Template.create(templateData);
    return template;
  } catch (error) {
    throw new Error('Erro ao cadastrar o template');
  }
}

async function listarTemplates() {
  try {
    const templates = await Template.findAll();
    return templates;
  } catch (error) {
    throw new Error('Erro ao listar os templates');
  }
}

async function getTemplateById(id) {
  try {
    const template = await Template.findByPk(id);

    if (!template) {
      throw new Error('Template não encontrado');
    }

    return template;
  } catch (error) {
    throw new Error('Erro ao obter o template por ID');
  }
}

module.exports = {
  cadastrarTemplate,
  listarTemplates,
  getTemplateById,
};
