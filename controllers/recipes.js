const Recipe = require('../models/recipe');

module.exports = {
    index,
    create,
    new: newRecipe,
    show,
    deleteRecipe,
    edit,
    update
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
    const recipe = new Recipe(req.body);
    recipe.save(function(err){
    if (err) return res.render('recipes/new');
    console.log(err);
    res.redirect('/')
    }
)}

function show (req, res) {
    Recipe.findById(req.params.id, function(err, recipe){
        res.render('recipes/show', {recipe});    
    } 
)};

function deleteRecipe (req, res) {
    console.log("delete", req.params.id)
    Recipe.deleteOne({_id: req.params.id}, function (err) {
        if (err) return console.log(err);
    });
    res.redirect('/')
};


function edit (req, res) {
    Recipe.findById(req.params.id, function(err, recipes) {
        console.log(recipes)
        res.render('recipes/edit', {recipes})
    } 
)};

function update (req, res) {
    console.log(req.body)
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}
    )
    .then(function(recipe){
    res.render('recipes/show', {recipe})
    
    }) 
    .catch(function(err)
    { console.log(err, "oops");
     res.render('recipes/index', {recipes})
})
};


