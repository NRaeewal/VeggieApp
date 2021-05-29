var express = require('express');
var router = express.Router();

var recipesCtrl= require('../controllers/recipes')

/* GET users listing. */
router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
router.get('/:id', recipesCtrl.show);

router.post('/', recipesCtrl.create);

router.delete('/:id', recipesCtrl.deleteRecipe); 

router.get('/:id/edit', recipesCtrl.edit)

router.put('/:id', recipesCtrl.update)

router.post('/:id', recipesCtrl.favourite)

module.exports = router;
