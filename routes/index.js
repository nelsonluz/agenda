var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = function(app) {
	var home = app.controllers.home;
	var contatos = app.controllers.contatos;
	app.get('/', home.index);
	app.get('/contatos', contatos.index)
};
