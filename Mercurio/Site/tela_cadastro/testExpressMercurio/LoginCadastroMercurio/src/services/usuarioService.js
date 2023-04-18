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
    inserir: (nomeUsuario, senhaUsuario, emailUsuario, nivelUsuario, cpfUsuario, dtNascUsuario) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO usuario (nomeUsuario, senhaUsuario,emailUsuario,nivelUsuario,cpfUsuario,dtNascUsuario) values (?, ? , ? , ? , ? ,?)', [nomeUsuario, senhaUsuario, emailUsuario, nivelUsuario, cpfUsuario, dtNascUsuario], (error, results) => {
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
    inserirEmpresa: (razaoSocial, cnpjEmpresa, porteEmpresa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO empresa (razaoSocial, cnpjEmpresa, porteEmpresa) VALUES (?, ?, ?)', [razaoSocial, cnpjEmpresa, porteEmpresa], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.insertIdEmpresa);
            });
        });
    }

};