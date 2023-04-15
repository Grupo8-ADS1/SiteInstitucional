const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./LoginCadastroMercurio/src/routes');
const server = express();

require('dotenv').config({
    path: 'variaveis.env'
});

server.use(cors());
server.use(bodyParser.urlencoded({
    extended: false
}));

server.use('/api', routes)










const app = express()




app.use(express.json())

app.use(express.static('public'))



app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home/index.html')
});

app.get('/quemSomos', (req, res) => {
    res.sendFile(__dirname + '/quemSomos/quemSomos.html');
});

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/cadastro/cadastro.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login/login.html');
});

app.get('/dashBoard', (req, res) => {
    res.sendFile(__dirname + `/dashBoard/dashboard.html`);
});

app.get('/recuperarSenha', (req, res) => {
    res.sendFile(__dirname + `/recuperacaoSenha/userRecuperarSenha.html`);
});

app.get('/NovaSenha', (req, res) => {
    res.sendFile(__dirname + `/novaSenha/novaSenha.html`);
});

app.get('/simulador', (req, res) => {
    res.sendFile(__dirname + `/simulador/simulador.html`);
});

app.get('/cadastroFuncionario', (req, res) => {
    res.sendFile(__dirname + `/cadastroFuncionario/cadFuncionario.html`);
});

app.get('/cadastroFuncionarioInstitucional', (req, res) => {
    res.sendFile(__dirname + `/cadastroFuncionarioInstitucional/cadFuncionarioInstitucional.html`);
});



server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});