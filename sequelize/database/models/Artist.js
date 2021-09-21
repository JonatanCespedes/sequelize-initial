module.exports = (sequelize, dataTypes) => {
    let alias = "";
    let cols = {

    }
    let config = {

    }

    const Artist = sequelize.define(alias, cols, config)

    return Artist
}