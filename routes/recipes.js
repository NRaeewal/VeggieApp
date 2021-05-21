var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('recipes/new', {
    user: req.user,
    name: req.query.name
  });
});

module.exports = router;
