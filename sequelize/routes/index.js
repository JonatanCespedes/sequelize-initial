var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);
router.get('/cancion/:id', controller.detail)
router.get('/search', controller.search)

module.exports = router;
