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















server.use(express.json())

server.use(express.static('public'))



server.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home/index.html')
});

server.get('/quemSomos', (req, res) => {
    res.sendFile(__dirname + '/quemSomos/quemSomos.html');
});

server.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/cadastro/cadastro.html');
});

server.get('/logar', (req, res) => {
    res.sendFile(__dirname + '/login/login.html');
});

server.get('/dashBoard', (req, res) => {
    res.sendFile(__dirname + `/dashBoard/dashboard.html`);
});

server.get('/recuperarSenha', (req, res) => {
    res.sendFile(__dirname + `/recuperacaoSenha/userRecuperarSenha.html`);
});

server.get('/NovaSenha', (req, res) => {
    res.sendFile(__dirname + `/novaSenha/novaSenha.html`);
});

server.get('/simulador', (req, res) => {
    res.sendFile(__dirname + `/simulador/simulador.html`);
});

server.get('/cadastroFuncionario', (req, res) => {
    res.sendFile(__dirname + `/cadastroFuncionario/cadFuncionario.html`);
});
//ESSAS PAGINAS DE CADASTRO DE FUNCIONARIO ESTÃO DUPLICADAS????
// server.get('/cadastroFuncionarioInstitucional', (req, res) => {
//     res.sendFile(__dirname + `/cadastroFuncionarioInstitucional/cadFuncionarioInstitucional.html`);
// });



server.listen(3300, () => {
    console.log(`Servidor rodando em http://localhost:3300`);
});