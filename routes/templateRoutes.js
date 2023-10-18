const express = require('express');
const router = express.Router();

const {
    listarTemplates,
    getTemplateById,
    cadastrarTemplate,
} = require('../app/controllers/templateControllers');


router.get('/', listarTemplates);
router.get('/:id', getTemplateById);
router.post('/', cadastrarTemplate);

module.exports = router;
