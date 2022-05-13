const { Model, DataTypes } = require('sequelize')

class Montadoras extends Model {
    static init(sequelize) {
        super.init({
            mon_nome: DataTypes.STRING,
            mon_ceo: DataTypes.STRING,
            mon_contato: DataTypes.STRING,
            mon_fundacao: DataTypes.DATE
        },{
            sequelize,
            tableName: 'montadoras',

            hooks: {
                beforeCreate: (montadora) => {
                    console.log("Executando a criação da montadora!")
                },

                afterCreate: (montadora) => {
                    console.log("Criação da montadora foi executada!")
                },             
            }
        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Motocicletas, {foreignKey: "montadora_id", as: 'montadora' })
    }
}
 
module.exports = Montadoras
