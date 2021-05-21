var express = require('express');
var router = express.Router();

var recipesCtrl= require('../controllers/recipes')

/* GET users listing. */
router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);

router.post('/', recipesCtrl.create)

module.exports = router;
