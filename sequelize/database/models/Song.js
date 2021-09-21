module.exports = (sequelize, dataTypes) => {
    let alias = "Songs";
    let cols = {
        id: {
            type: dataTypes.INTEGER(6),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING(123)
        },
        id_album: {
            type: dataTypes.INTEGER(6),
        },
        id_tipo_de_medio: {
            type: dataTypes.INTEGER(4),
        },
        id_genero: {
            type: dataTypes.INTEGER(4),
        },
        compositor: {
            type: dataTypes.STRING(188)
        },
        milisegundos: {
            type: dataTypes.INTEGER(11),
        },
        bytes: {
            type: dataTypes.BIGINT(20)
        },
        precio_unitario: {
            type: dataTypes.DECIMAL(3,2)
        }
    }
    let config = {
        tableName: "canciones",
        timestamps: false
    }

    const Song = sequelize.define(alias, cols, config)

    return Song
}