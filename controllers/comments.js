const Recipe = require('../models/recipe');

module.exports = {
    create
  };


  function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.comments.push(req.body);
        console.log(req.body)
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe.id}`);
        })
    })
  };