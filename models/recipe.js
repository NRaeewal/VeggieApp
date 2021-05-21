const mongoose = require('mongoose');


const Schema = mongoose.Schema;
	
<<<<<<< HEAD
const movieSchema = new Schema({
  title: String,
  ingredients: [String],
  procedure: String,
    
});
=======
const recipeSchema = new Schema({
  name: String,
  ingredients: [String],
  procedure: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
>>>>>>> 7b38908e01cbe78493f1612fca96666c72dc1418
