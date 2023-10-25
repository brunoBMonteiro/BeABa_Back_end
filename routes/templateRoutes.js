const express = require('express');
const router = express.Router();
const verificarJWT = require('../middlewares/authMiddleware');

const {
    listarTemplates,
    getTemplateById,
    cadastrarTemplate,
} = require('../app/controllers/templateControllers');


// Rotas
router.get('/', listarTemplates);
router.get('/:id', getTemplateById);

router.post('/', verificarJWT, cadastrarTemplate);

module.exports = router;