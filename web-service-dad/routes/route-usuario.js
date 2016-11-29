var express = require('express');
var router = express.Router();
var Usuario = require('../models/model-users.js');

router.get("/", function(req, resp) {
	resp.send("<h1>Usuário</h1>");
});
router.get('/lista', function(req, res) {
	Usuario.find(function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
	});
});
router.get('/logar', function(req, res) {
  Usuario.find({ CPF: req.query.municipio, PASSWORD: req.query.cpf}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.post('/cadastro', function(req, res) {
	var usuario = new Usuario(req.body);

	usuario.save(function(err, data) {

		console.log(data);

		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});


module.exports = router;
