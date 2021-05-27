const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comments: String,
}, {
timestamps: true
});


const recipeSchema = new Schema({
  name: String,
  ingredients: [String],
  procedure: String,
  comments: [commentSchema],
  favourite: Boolean
});


module.exports = mongoose.model('Recipe', recipeSchema);
