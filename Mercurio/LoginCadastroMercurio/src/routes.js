const express = require('express');
const router = express.Router();

const usuarioController = require('./controllers/usuarioController');

router.get('/usuarios', usuarioController.buscarTodos);

router.get('/usuarios/:idUsuario', usuarioController.buscarUm);

router.post('/usuario', usuarioController.inserir);

router.put('/usuario/:idUsuario', usuarioController.alterar);

router.delete('/usuario/:idUsuario', usuarioController.excluir);



module.exports = router;