const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOSTJV,
    user: process.env.DB_USERJV,
    password: process.env.DB_PASSJV,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) throw error;
    console.log(`Conectado ao banco de dados ${process.env.DB_NAME} com SUCESSO `)
});

module.exports = connection;