const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM usuario', (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarUm: (idUsuario) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM usuario WHERE idUsuario = ?', [idUsuario], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (emailUsuario, senhaUsuario) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO usuario (emailUsuario, senhaUsuario) values (?, ?)', [emailUsuario, senhaUsuario], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.insertIdUsuario);
            });

        });
    },
    alterar: (idUsuario, emailUsuario, senhaUsuario) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE usuario SET emailUsuario = ?, senhaUsuario = ? WHERE idUsuario = ?', [emailUsuario, senhaUsuario, idUsuario], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });

        });
    },
    excluir: (idUsuario) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM usuario WHERE idUsuario = ?', [idUsuario], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },
};