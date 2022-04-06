const Montadoras = require('../models/montadModels.js')

module.exports = {
    async indexAll(req, res){
        const montadoras = await Montadoras.findAll()
        return res.json(montadoras);
    },

    async index(req, res) {
        const { id } = req.params
        console.log('Parametro montadora esperado: ' + id)

        const montadoras = await Montadoras.findByPk(id)

        return res.json(montadoras)
    },

    async store(req, res){
        const {mon_nome, mon_fantasia, mon_ceo, mon_pais, mon_fundacao} = req.body;
        const montadora = await Montadoras.create({mon_nome, mon_fantasia, mon_ceo, mon_pais, mon_fundacao});
        return res.status(200).send({
            status: 1,
            message: "Montadora cadastrada com sucesso!",
            montadora
        })
    },

    async update(req, res){
        const {mon_nome, mon_fantasia, mon_ceo, mon_pais, mon_fundacao} = req.body;
        const {id} = req.params;

        await Montadoras.update({
            mon_nome, mon_fantasia, mon_pais, mon_fundacao, mon_ceo
        }, { where: {
                id: id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Informações da montadora atualizada com sucesso!"
        })
    },

    async delete(req, res){
        const {id} = req.params;

        await Montadoras.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Montadora excluída com sucesso!"
        })
    }
}