const Enderecos = require('../models/enderecosModels.js');
const Usuarios = require('../models/usuariosModels.js');

module.exports = {
    async indexAll(req, res) {
        const endereco = await Enderecos.findAll()
        return res.json(endereco)
    },

    async index(req, res) {
        const { usuario_id } = req.params;
        console.log('Parâmetro usuário esperado: ' + usuario_id)

        const endereco = await Usuarios.findByPk(usuario_id, {
            include: {association: 'usuario'}
        })

        return res.json(endereco)
    },

    async store(req, res) {
        const { usuario_id } = req.params;
        const { end_endereco, end_cep, end_numero } = req.body;

        console.log('Parâmetro esperado: ' + usuario_id)
        console.log('Dados: ' + req.body)

        // Validação do Usuário
        const usuario = await Usuarios.findByPk(usuario_id)
        if(!usuario) {
            return res.status(400).json({error: 'Empresa não encontrada!'})
        }
        const endereco = await Enderecos.create({
            end_endereco,
            end_cep,
            end_numero,
            usuario_id,
        })
        return res.json(endereco)
    }
}