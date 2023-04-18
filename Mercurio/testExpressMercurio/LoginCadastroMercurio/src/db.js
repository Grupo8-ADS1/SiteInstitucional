const mysql = require('mysql2'); // função de conectar com o banco 
                                // require - puxa as bibliotecas do Mysql para o uso

const connection = mysql.createConnection({ // criando a conexão com o banco
    host: 'localhost',  // server local
<<<<<<< HEAD
    user: 'root', // usuario do banco local
    password: 'Lucio0512', // senha do banco local
=======
    user: 'aluno', // usuario do banco local
    password: 'sptech', // senha do banco local
>>>>>>> c2bf78b40641a0b13348ac1e351ac39e74e89c7f
    database: 'mercurio' // database do site
});

connection.connect((error) => { // tratamento de erro
    if (error) throw error; // traz o erro da conexão
    
    console.log(`Conectado ao banco de dados Mercurio com SUCESSO `)
});

module.exports = connection; // inicia a conexão