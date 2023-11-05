const express = require('express');
const router = express.Router();
const verificarJWT = require('../middlewares/authMiddleware');

const {
    listarTemplates,
    getTemplateById,
    cadastrarTemplate,
    atualizarStatusTemplate,
    downloadTemplateController,
} = require('../app/controllers/templateControllers');


// Rotas
router.get('/', listarTemplates);
router.get('/:id', getTemplateById);
router.post('/', verificarJWT, cadastrarTemplate);
router.patch('/:id/status', verificarJWT, atualizarStatusTemplate);
router.get('/:id/download', downloadTemplateController);

module.exports = router;