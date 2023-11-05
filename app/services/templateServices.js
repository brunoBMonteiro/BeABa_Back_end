const Template = require('../models/template');
const Usuario = require('../models/usuario');
const { Parser }  = require('json2csv');
const XLSX = require('xlsx');


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

async function atualizarStatusTemplate(id, status) {
  try {
    const template = await Template.findByPk(id);

    if (!template) {
      throw new Error('Template não encontrado');
    }

    if (status === "Ativo") {
      template.status = true;
    } else if (status === "Inativo") {
      template.status = false;
    } else {
      throw new Error('O status fornecido é inválido. Deve ser "ativo" ou "inativo"');
    }

    await template.save();
    return template;

  } catch (error) {
    throw new Error('Erro ao atualizar o status do template: ' + error.message);
  }
}

async function downloadTemplate(id) {
  try {
    const template = await Template.findByPk(id, {
      attributes: ['nome_template', 'extensao_template', 'campos_template']
    });

    if (!template) {
      throw new Error('Template não encontrado');
    }

    // Converte os campos para JSON
    const jsonData = template.campos_template;

    return {
      jsonData,
      fileName: template.nome_template,
      fileExtension: template.extensao_template,
    };
  } catch (error) {
    throw new Error('Erro ao baixar o template: ' + error.message);
  }
}


module.exports = {
  cadastrarTemplate,
  listarTemplates,
  getTemplateById,
  atualizarStatusTemplate,
  downloadTemplate,
};