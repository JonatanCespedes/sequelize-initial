let db = require('../database/models')

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
        
    }
}