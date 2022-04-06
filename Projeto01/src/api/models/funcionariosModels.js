const { Model, DataTypes } = require('sequelize');

class Funcionarios extends Model {
    static init(sequelize) {
        super.init({
            fun_nome: DataTypes.STRING,
            fun_password: DataTypes.STRING,
            fun_email: DataTypes.STRING,
            emp_id: DataTypes.INTEGER,
            fun_sexo: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'funcionarios',

        hooks: {
            beforeCreate: (funcionario)
        }
        });
        return this
    }
    static associate(models) {
        this.belongsTo(models.Empresas, {foreignKey: "emp_id", as: "empresas"})
    }
}

module.exports = Funcionarios