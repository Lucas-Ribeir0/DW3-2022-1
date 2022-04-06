const {Model, DataTypes} = require('sequelize');

class Montadoras extends Model {
    static init(sequelize) {
        super.init({
            mon_nome: DataTypes.STRING,
            mon_fantasia: DataTypes.STRING,
            mon_pais: DataTypes.STRING,
            mon_fundacao: DataTypes.DATE,
            mon_ceo: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'montadora',

            hooks: {
                beforeCreate: (montadora) => {
                    console.log("Em Processo De....BeforeCreate")
                },

                afterCreate: (montadora) => {
                    console.log("Em Processo de............ AfterCreate....")
                }
            }
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.Motocicletas, { foreignKey: "mon_codigo", as: 'Montadora'})
    }
}

module.exports = Montadoras