const express = require('express');
const router = express.Router();
const session = require('express-session');
const db = require('./db');

router.use(session({
  secret: 'senha',
  resave: false,
  saveUninitialized: false
}));

const usuarioController = require('./controllers/usuarioController');

router.get('/usuarios', usuarioController.buscarTodos);

router.get('/usuarios/:idUsuario', usuarioController.buscarUm);

router.post('/usuario', usuarioController.inserir);

router.post('/empresa', usuarioController.inserirEmpresa);

router.put('/usuario/:idUsuario', usuarioController.alterar);

router.delete('/usuario/:idUsuario', usuarioController.excluir);

// Verifica as credenciais do usuário e inicia a sessão se as credenciais forem válidas
router.post('/login', (req, res) => {
  const {
    emailUsuario,
    senhaUsuario
  } = req.body;

  // Verifica se o usuário existe na tabela de usuários
  db.query('SELECT * FROM usuario WHERE emailUsuario = ?', [emailUsuario], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      // Verifica se a senha está correta
      if (senhaUsuario === results[0].senhaUsuario) {
        // Inicia a sessão e redireciona o usuário para a página de dashboard
        req.session.idUsuario = results[0].idUsuario;
        res.redirect('/dashBoard');
      } else {
        res.send('<script>alert("Senha incorreta");window.location.href="/logar";</script>');
      }
    } else {
      res.send('<script>alert("Email incorreto");window.location.href="/logar";</script>');
    }
  });
});

// Verifica se o usuário está autenticado e autorizado antes de permitir o acesso ao CRUD
router.get('/crud', (req, res) => {
  if (req.session.idUsuario) {
    // O usuário está autenticado e autorizado, então permita o acesso ao CRUD
    res.send('CRUD functionality');
  } else {
    // O usuário não está autenticado ou autorizado, então redirecione-o para a página de login
    res.redirect('/login');
  }
});



module.exports = router;