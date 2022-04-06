const {Model, DataTypes} = require('sequelize');

class Motocicletas extends Model {
    static init(sequelize) {
        super.init({
            mot_modelo: DataTypes.STRING,
            mot_cor: DataTypes.STRING,
            mot_categoria: DataTypes.STRING,
            mot_motor: DataTypes.STRING,
            mot_ano: DataTypes.INTEGER,
            mot_valorcusto: DataTypes.DECIMAL,
            mon_codigo: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'motocicleta'
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Montadoras, { foreignKey: 'mon_codigo', as: 'Montadoras'})
    }
}

module.exports = Motocicletas