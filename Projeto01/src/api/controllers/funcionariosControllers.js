const { associations } = require('../models/empresasModels');
const Empresas = require('../models/empresasModels');
const Funcionarios = require('../models/funcionariosModels');

module.exports = {
    async indexAll(req, res) {
        const funcionario = await Funcionarios.findAll()
        return res.json(funcionario)
    },

    async index(req, res) {
        const { emp_id } = req.params
        console.log('Parametro empresa esperado: ' + emp_id)
        
        const funcionario = await Empresas.findByPk(emp_id, {
            include: {association: 'empresa'}
        })

        return res.json(funcionario)
    },

    async store(req, res) {
        const { emp_id } = req.params;
        const { fun_nome, fun_password, fun_email} = req.body;

        console.log('Paramêtro esperado: ' + emp_id)
        console.log('Dados: ' + req.body)
    
        // Validação da empresa 
        const empresa = await Empresas.findByPk(emp_id)
        if(!empresa) {
            return res.status(400).json({error: 'Empresa não encontrada!'})
        }
        const funcionario = await Funcionarios.create({
            fun_nome,
            fun_email,
            fun_password,
            emp_id,
        });

        return res.json(funcionario)
    },
    async update(req, res) {
        const { funcionario_id } = req.params
        const { fun_nome, fun_email, fun_password, fun_sexo } = req.body

        await Funcionarios.update({
            fun_nome, fun_email, fun_password, fun_sexo
        }, {
            where: { id: funcionario_id }
        });
        return res.status(200).send({
            status: 1,
            message: "Funcionário atualizado com sucesso!"
        })
    }
}