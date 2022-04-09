const { Model, DataTypes } = require('sequelize');

class Motocicletas extends Model {
    static init(sequelize) {
        super.init({
            mot_nome: DataTypes.STRING,
            mot_motor: DataTypes.STRING,
            mot_valor: DataTypes.STRING,
            montadora_id: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'motocicletas', 
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Montadoras, {foreignKey: "montadora_id", as: "montadoras"})
    }
}

module.exports = Motocicletas



