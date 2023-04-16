const usuarioService = require('../services/usuarioService')

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {
            error: '',
            result: []
        };

        let usuarios = await usuarioService.buscarTodos();

        for (let i in usuarios) {
            json.result.push({
                idUsuario: usuarios[i].idUsuario,
                nomeUsuario: usuarios[i].nomeUsuario,
                emailUsuario: usuarios[i].emailUsuario,
                senhaUsuario: usuarios[i].senhaUsuario,
                nivelUsuario: usuarios[i].nivelUsuario,
                cpfUsuario: usuarios[i].cpfUsuario,
                dtNascUsuario: usuarios[i].dtNascUsuario
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let idUsuario = req.params.idUsuario;
        let usuario = await usuarioService.buscarUm(idUsuario);
        if (usuario) {
            json.result = usuario;
        }
        res.json(json)
    },

    inserir: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let nomeUsuario = req.body.nomeUsuario;
        let senhaUsuario = req.body.senhaUsuario;
        let emailUsuario = req.body.emailUsuario;
        let nivelUsuario = req.body.nivelUsuario;
        let cpfUsuario = req.body.cpfUsuario;
        let dtNascUsuario = req.body.dtNascUsuario;

        if (emailUsuario && senhaUsuario) {
            try {
                let usuarioId = await usuarioService.inserir(nomeUsuario, senhaUsuario, emailUsuario, nivelUsuario, cpfUsuario, dtNascUsuario);
                json.result = {
                    idUsuario: usuarioId,
                    nomeUsuario,
                    senhaUsuario,
                    emailUsuario,
                    nivelUsuario,
                    cpfUsuario,
                    dtNascUsuario
                };
                res.redirect('/logar');
            } catch (error) {
                json.error = error.message;
                res.status(500).json(json);
            }
        } else {
            json.error = 'Campos não enviados';
            res.status(400).json(json);
        }
    },
    alterar: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let idUsuario = req.params.idUsuario
        let emailUsuario = req.body.emailUsuario;
        let senhaUsuario = req.body.senhaUsuario;

        if (emailUsuario && senhaUsuario && idUsuario) {
            await usuarioService.alterar(idUsuario, emailUsuario, senhaUsuario);
            json.result = {
                idUsuario,
                emailUsuario,
                senhaUsuario
            };
        } else {
            json.error = 'Campos não enviados'
        };

        res.json(json)


    },
    excluir: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        await usuarioService.excluir(req.params.idUsuario);

        res.json(json)
    },
    inserirEmpresa: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let razaoSocial = req.body.razaoSocial;
        let cnpjEmpresa = req.body.cnpjEmpresa;
        let porteEmpresa = req.body.porteEmpresa;
     
        if (razaoSocial && cnpjEmpresa) {
            try {
                let empresaId = await usuarioService.inserirEmpresa(razaoSocial, cnpjEmpresa, porteEmpresa,);
                json.result = {
                    idEmpresa: empresaId,
                    razaoSocial,
                    cnpjEmpresa,
                    porteEmpresa
                };
                res.redirect('/cadastroFuncionario');
            } catch (error) {
                json.error = error.message;
                res.status(500).json(json);
            }
        } else {
            json.error = 'Campos não enviados';
            res.status(400).json(json);
        }
    },

}