const templateService = require('../services/templateServices');

async function cadastrarTemplate(req, res) {
  const templateData = req.body;

  try {
    const template = await templateService.cadastrarTemplate(templateData);
    return res.status(201).json({ mensagem: 'Template cadastrado com sucesso', template });
  } catch (error) {
    console.error('Erro ao cadastrar o template:', error);
    return res.status(500).json({ erro: error.message });
  }
}

async function listarTemplates(req, res) {
  try {
    const templates = await templateService.listarTemplates();
    return res.status(200).json(templates);
  } catch (error) {
    console.error('Erro ao listar os templates:', error);
    return res.status(500).json({ erro: error.message });
  }
}

async function getTemplateById(req, res) {
  const { id } = req.params;

  try {
    const template = await templateService.getTemplateById(id);
    return res.json({ template });
  } catch (error) {
    console.error('Erro ao obter o template por ID:', error);
    return res.status(500).json({ erro: error.message });
  }
}

module.exports = {
  cadastrarTemplate,
  listarTemplates,
  getTemplateById,
};