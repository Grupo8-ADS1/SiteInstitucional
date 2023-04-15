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
                senhaUsuario: usuarios[i].senhaUsuario
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

        let emailUsuario = req.body.emailUsuario;
        let senhaUsuario = req.body.senhaUsuario;
        

        if (emailUsuario && senhaUsuario) {
            let usuarioId = await usuarioService.inserir(emailUsuario, senhaUsuario);
            json.result = {
                idUsuario: usuarioId,
                emailUsuario,
                senhaUsuario
            };
        } else {
            json.error = 'Campos não enviados'
        };

        res.json(json)


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
            await usuarioService.alterar(idUsuario,emailUsuario, senhaUsuario);
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
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await usuarioService.excluir(req.params.idUsuario);

        res.json(json)
    }

}