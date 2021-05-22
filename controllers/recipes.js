const Recipe = require('../models/recipe');

module.exports = {
    index,
    create,
    new: newRecipe
  };


function index (req, res){
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', {recipes})
    } 
    )};


function newRecipe (req, res) {
    res.render('recipes/new')
};

function create (req,res) {
    console.log(req.body);
    const recipe = new Recipe(req.body);
    recipe.save(function(err){
    if (err) return res.render('recipes/new');
    console.log(err);
    res.redirect('/')
    }
    )}