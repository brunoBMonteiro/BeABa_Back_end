const Template = require('../models/template');
const Usuario = require('../models/usuario');

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
    const templates = await Template.findAll({
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['matricula', 'email'],
        },
      ],
    });
    return templates;
  } catch (error) {
    throw new Error('Erro ao listar os templates: ' + error.message);
  }
}

async function getTemplateById(id) {
  try {
    const template = await Template.findByPk(id, {
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['matricula', 'email'],
        },
      ],
    });

    if (!template) {
      throw new Error('Template não encontrado');
    }

    return template;
  } catch (error) {
    throw new Error('Erro ao obter o template por ID: ' + error.message);
  }
}

module.exports = {
  cadastrarTemplate,
  listarTemplates,
  getTemplateById,
};