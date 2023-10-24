const express = require('express');
const router = express.Router();
// Importando o middleware de autenticação
const authenticateJWT = require('../middlewares/authMiddleware');

const {
    listarTemplates,
    getTemplateById,
    cadastrarTemplate,
} = require('../app/controllers/templateControllers');


// Rotas
router.get('/', listarTemplates);
router.get('/:id', getTemplateById);

// Adicionando o middleware à rota de criação de template
router.post('/', authenticateJWT, cadastrarTemplate);

module.exports = router;
