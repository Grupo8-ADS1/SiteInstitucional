const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'joao@2003',
    database: 'Mercurio'
});

connection.connect((error) => {
    if (error) throw error;
    console.log(`Conectado ao banco de dados Mercurio com SUCESSO `)
});

module.exports = connection;