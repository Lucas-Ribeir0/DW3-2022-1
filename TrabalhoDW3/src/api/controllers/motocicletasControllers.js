const Montadoras = require('../models/montadorasModels.js')
const Motocicletas = require('../models/motocicletasModels.js');

module.exports = {

    async indexAll(req, res) {
        const motocicleta = await Motocicletas.findAll({
    })
        return res.json(motocicleta)
    },

    async index(req, res){
        const { montadora_id } = req.params
        console.log('Parametro montadora esperado ' + montadora_id)

        const motocicleta = await Montadoras.findByPk(montadora_id, {
            include: { association: 'montadora'}
        })

        return res.json(motocicleta)

    },

    async store(req, res) {
        const { montadora_id } = req.params
        const { mot_nome, mot_motor, mot_valor } = req.body

        console.log('Parametro esperado: ' + montadora_id)
        console.log('Dados: ' + req.body)
// validar a empresa
        const montadora = await Montadoras.findByPk(montadora_id) 

        if(!montadora) {
            return res.status(400).json({error: 'Montadora não encontrada!'})
        }
        const motocicleta = await Motocicletas.create({
            mot_nome,
            mot_motor,
            mot_valor,
            montadora_id,
        });

        return res.json(motocicleta);
    },

    async update(req, res) {
        const { mot_nome, mot_motor, mot_valor, motocicleta_id } = req.body

        await Motocicletas.update({
            mot_nome, mot_motor, mot_valor 
        }, {
            where: { id: motocicleta_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Motocicleta atualizada com sucesso!"
        })
    },
    async delete(req, res) {
        const { motocicleta_id } = req.params 

        // Validar funcionário
        const motocicleta = await Motocicletas.findByPk(motocicleta_id)
        if(!motocicleta) {
            return res.status(400).json({error: "Motocicleta não encontrada!"})
        } else {
            console.log("Motocicleta encontrada!")
        }

        await Motocicletas.destroy({
            where: {
                id: motocicleta_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: "Motocicleta deletada com sucesso!",

        })
    }

};
