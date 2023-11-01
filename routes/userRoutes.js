const express = require('express');
const router = express.Router();

const {
  cadastrarUsuario,
  listarUsuarios,
  listarUsuarioMatricula,
  deletarUsuarioMatricula,
  alterarTipoAcesso,
} = require('../app/controllers/userControllers');

router.post('/cadastrar', cadastrarUsuario);
router.get('/listar', listarUsuarios);
router.get('/:matricula', listarUsuarioMatricula);
router.delete('/:matricula', deletarUsuarioMatricula);
router.patch('/:matricula/tipoacesso', alterarTipoAcesso);


module.exports = router;