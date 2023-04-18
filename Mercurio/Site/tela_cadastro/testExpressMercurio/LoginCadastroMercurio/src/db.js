const mysql = require('mysql2'); // função de conectar com o banco 
                                // require - puxa as bibliotecas do Mysql para o uso

const connection = mysql.createConnection({ // criando a conexão com o banco
    host: 'localhost',  // server local
    user: 'evelyn', // usuario do banco local
    password: 'sptech', // senha do banco local
    database: 'mercurio' // database do site
});

connection.connect((error) => { // tratamento de erro
    if (error) throw error; // traz o erro da conexão
    
    console.log(`Conectado ao banco de dados Mercurio com SUCESSO `)
});

module.exports = connection; // inicia a conexão