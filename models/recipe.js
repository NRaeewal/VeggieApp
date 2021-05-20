const mongoose = require('mongoose');


const Schema = mongoose.Schema;
	
const movieSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String]
});