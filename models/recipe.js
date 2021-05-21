const mongoose = require('mongoose');


const Schema = mongoose.Schema;
	
const movieSchema = new Schema({
  title: String,
  ingredients: [String],
  procedure: String,
    
});