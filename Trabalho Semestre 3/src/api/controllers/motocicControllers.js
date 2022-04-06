const Montadoras = require('../models/montadModels.js');
const Motocicletas = require('../models/motocicModels.js')

module.exports = {
    async indexAll(req, res){
        const motocicleta = await Motocicletas.findAll()
        return res.json(motocicleta);
    },

    async index (req, res) {
        const { mon_codigo } = req.params
        console.log('Parametro Montadora Esperado: ' + mon_codigo)

        const motocicleta = await Montadoras.findByPk(mon_codigo, {
            include: { association: 'Montadora' }
        })
    },

    async store(req, res){
        const {mot_modelo, mot_cor, mot_categoria, mot_motor, mot_ano, mot_valorcusto, mon_codigo} = req.body;
        const motocicleta = await Motocicletas.create({mot_modelo, mot_cor, mot_categoria, mot_motor, mot_ano, mot_valorcusto, mon_codigo});
        return res.status(200).send({
            status: 1,
            message: "Motocicleta cadastrada com sucesso!",
            motocicleta
        })
    },

    async update(req, res){
        const {mot_modelo, mot_cor, mot_categoria, mot_motor, mot_ano, mot_valorcusto, mon_codigo} = req.body;
        const {id} = req.params;

        await Motocicletas.update({
            mot_modelo, mot_cor, mot_categoria, mot_motor, mot_ano, mot_valorcusto, mon_codigo
        }, { where: {
                id: id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Informações da motocicleta atualizada com sucesso!"
        })
    },

    async delete(req, res){
        const {id} = req.params;

        await Motocicletas.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Motocicleta excluída com sucesso!"
        })
    }
}