const Montadoras = require('../models/montadorasModels.js')

module.exports = {
    async indexAll(req, res) {
        const montadoras = await Montadoras.findAll();
        return res.json(montadoras)
    },

    async index(req, res){
        const { montadora_id } = req.params
        console.log('Parametro montadora esperado ' + montadora_id)

        const montadora = await Montadoras.findByPk(montadora_id)

        return res.json(montadora)
    },

    async store(req, res) {
        const {mon_nome, mon_ceo, mon_contato, mon_fundacao} = req.body
        const montadoras = await Montadoras.create({
            mon_nome,
            mon_ceo,
            mon_contato,
            mon_fundacao
        });
        return res.status(200).send({
            status: 1,
            message: 'Montadora cadastrada com sucesso!!!',
            empresa: montadoras
        })
    },
    async update(req, res) {
        const { montadora_id } = req.params
        const { mon_nome, mon_ceo, mon_contato, mon_fundacao } = req.body

        await Montadoras.update({
            mon_nome, mon_ceo, mon_contato, mon_fundacao 
        }, {
            where: { id: montadora_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Montadora atualizada com sucesso!"
        })
    },
    async delete(req, res) {
        const { montadora_id } = req.params 

        // Validar funcionário
        const montadora = await Montadoras.findByPk(montadora_id)
        if(!montadora) {
            return res.status(400).json({error: "Montadora não encontrada!"})
        } else {
            console.log("Montadora encontrada!")
        }

        await Montadoras.destroy({
            where: {
                id: montadora_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: "Montadora deletada com sucesso!",

        })
    }
}

