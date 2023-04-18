// const = tipo de variavel que NAO muda - é constante!
const express = require('express'); // endpoints
const router = express.Router(); // iniciando o express (criador de endpoints para acessar as rotas)
const session = require('express-session'); // criador de sessoes para interação do site
const db = require('./db'); // puxa a configuração feita no arquivo db

router.use(session({ // configuracao do session
  secret: 'senha',
  resave: false,
  saveUninitialized: false
}));

const usuarioController = require('./controllers/usuarioController'); // arquivo

// CRUD - Create / Read / Update / Delete 
router.get('/usuarios', usuarioController.buscarTodos); // Select (read) - get

router.get('/usuarios/:idUsuario', usuarioController.buscarUm); // Select (read)

router.post('/usuario', usuarioController.inserir); // Insert (create) - post

router.post('/empresa', usuarioController.inserirEmpresa);// Insert (create)

router.put('/usuario/:idUsuario', usuarioController.alterar); // Update 

router.delete('/usuario/:idUsuario', usuarioController.excluir); // Delete

// Verifica as credenciais do usuário e inicia a sessão se as credenciais forem válidas
// cria os parametros para verificacao no banco
router.post('/login', (req, res) => {
  const {
    emailUsuario,
    senhaUsuario
  } = req.body; 

  // Verifica os parametros criados - se o usuário existe na tabela de usuários
  db.query('SELECT * FROM usuario WHERE emailUsuario = ?', [emailUsuario], (error, results) => { // select no banco
    if (error) throw error; // tratamento de erro

    if (results.length > 0) { // se a pesquisa trazer algo...

      // Verifica se a senha está correta
      if (senhaUsuario === results[0].senhaUsuario) {

        // Inicia a sessão e redireciona o usuário para a página de dashboard
        req.session.idUsuario = results[0].idUsuario;
        res.redirect('/dashBoard'); // redireciona para o dash

      } else {
        res.send('<script>alert("Senha incorreta");window.location.href="/login";</script>');
      }

    } else {
      res.send('<script>alert("Email incorreto");window.location.href="/login";</script>'); // res (resposta) send (envia o redirecionamento)
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



module.exports = router; // exporta as rotas (envia este arquivo)