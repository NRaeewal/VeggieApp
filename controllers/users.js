const User = require('../models/user');

module.exports = {
    index,
  };

function index(req, res, next) {
      res.render('recipes/index', {
        user: req.user,
        name: req.query.name,
        sortKey
      });
    };