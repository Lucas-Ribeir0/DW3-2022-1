const { Model, DataTypes } = require('sequelize')

class Usuarios extends Model {
    static init(sequelize) {
        super.init({
            usr_nome: DataTypes.STRING,
            usr_email: DataTypes.STRING,
            usr_password: DataTypes.STRING,
            usuario_id: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'usuarios'
        });
        return this
    }
    static associate(models) {
        this.hasMany(models.Enderecos, {foreignKey: "usuario_id", as: "usuario"})
    }
}

module.exports = Usuarios;