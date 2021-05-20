const mongoose = require('mongoose');


const Schema = mongoose.Schema;
	
const recipeSchema = new Schema({
  name: String,
  ingredients: [String],
  procedure: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
