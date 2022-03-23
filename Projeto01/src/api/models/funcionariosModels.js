const { Model, DataTypes } = require('sequelize');

class Funcionarios extends Model {
    static init(sequelize) {
        super.init({
            fun_nome: DataTypes.STRING,
            fun_password: DataTypes.STRING,
            fun_email: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'funcionarios'
        });
        return this
    }
    static associate(models) {
        this.belongsTo(models.Empresas, {foreignKey: "emp_id", as: "empresas"})
    }
}

module.exports = Funcionarios