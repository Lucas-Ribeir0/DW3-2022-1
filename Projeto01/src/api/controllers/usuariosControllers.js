const Usuarios = require('../models/usuariosModels.js')

module.exports = {
    async indexAll(req, res) {
        const usuarios = await Usuarios.findAll();
        return res.json(usuarios);
    },

    async store(req, res) {
        const { usr_nome, usr_email, usr_password } = req.body;

        const usuarios = await Usuarios.create({
            usr_nome,
            usr_email,
            usr_password,
        });
        return res.status(200).send({
            status: 1,
            message: 'Usuário cadastrado com sucesso!',
            usuarios
        })
    }
}