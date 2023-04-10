const express = require('express');
const bodyParser = require('body-parser')



const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))



app.use(express.json())

app.use(express.static('public'))

// validação


var loginJoao = "joao@mercurio.com";
var loginEvelyn = "evelyn@mercurio.com";
var loginGustavo = "gustavo@mercurio.com";
var loginFelipe = "felipe@mercurio.com";
var loginAmanda = "amanda@mercurio.com";
var loginLucio = "lucio@mercurio.com";
var senhaJoao = 'Joao12345678';
var senhaEvelyn = 'Evelyn12345678';
var senhaGustavo = 'Gustavo12345678';
var senhaFelipe = 'Felipe12345678';
var senhaAmanda = 'Amanda12345678';
var senhaLucio = 'Lucio12345678';

app.post('/add', (req, res) => {
    if ((req.body.login == loginJoao ||
        req.body.login == loginEvelyn ||
        req.body.login == loginGustavo ||
        req.body.login == loginFelipe ||
        req.body.login == loginAmanda ||
        req.body.login == loginLucio) && 
        (req.body.senha == senhaAmanda ||  
        req.body.senha == senhaJoao ||
        req.body.senha == senhaEvelyn ||
        req.body.senha == senhaGustavo ||
        req.body.senha == senhaFelipe ||
        req.body.senha== senhaLucio)
        ) { 
            res.redirect('/dashBoard')
    } else{
        res.end("Falha ao Logar")
    }
})





app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home/index.html')
});


app.get('/quemSomos', (req, res) => {
    res.sendFile(__dirname +'/quemSomos/quemSomos.html');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname +'/cadastro/cadastro.html');
});

app.get('/login', (req, res) => {
    res.sendFile( __dirname + '/login/login.html' );
});

app.get('/dashBoard', (req, res) => {
    res.sendFile( __dirname + `/dashBoard/dashboard.html`)
});

app.get('/recuperarSenha', (req, res) => {
    res.send(`Aqui vai a recuperar senha`)
});





app.listen(3333, () => {
    console.log(`Server rodando em localHost:3333`)
});