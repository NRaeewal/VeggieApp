var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    favourites: Boolean

  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);