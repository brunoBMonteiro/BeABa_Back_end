const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateControllers');

// Rota para listar todos os templates
router.get('/', templateController.listarTemplates);

// Rota para buscar um template por ID
router.get('/:id', templateController.getTemplateById);

// Rota para cadastrar um novo template
router.post('/', templateController.cadastrarTemplate);

module.exports = router;
