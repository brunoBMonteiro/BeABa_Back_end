const templateService = require('../services/templateServices');

async function cadastrarTemplate(req, res) {
  const templateData = req.body;

  // O ID do usuário é definido pelo middleware e anexado ao objeto req
  const userId = req.user.userId;
  
  if (!userId) {
    return res.status(401).json({ mensagem: 'Token inválido' });
  }

  // Anexe o ID do usuário ao objeto templateData
  templateData.id_usuario_cadastrado = userId;

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

async function atualizarStatusTemplate(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const templateAtualizado = await templateService.atualizarStatusTemplate(id, status);
    return res.json({ mensagem: 'Status atualizado com sucesso', template: templateAtualizado });
  } catch (error) {
    console.error('Erro ao atualizar o status do template, verifique se o ID está correto:', error);
    return res.status(500).json({ erro: error.message });
  }
}

module.exports = {
  cadastrarTemplate,
  listarTemplates,
  getTemplateById,
  atualizarStatusTemplate,
};