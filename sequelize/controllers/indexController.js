let db = require('../database/models')
const { Op } = require('sequelize')

module.exports = {
    index: (req, res) => {
        db.Songs.findAll()
        .then(songs => {
            res.render('index', {
                title: "Musimundos",
                songs
            })
        })
    },
    detail: (req, res) => {
       /*  db.Songs.findOne({
            where: {
                id: req.params.id
            }
        }) */
        db.Songs.findByPk(req.params.id)
        .then(song => {
            res.render("detail", {
                title: song.nombre,
                song
            })
        })
    },
    search: (req, res) => {
        db.Songs.findAll({
            where: {
                nombre: {
                    [Op.like] : `%${req.query.search}%`
                } 
            }
        })
        .then(songs => {
            res.render("results", {
                title: req.query.search,
                songs
            })
        })
    }
}