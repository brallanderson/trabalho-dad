var express = require('express');
var router = express.Router();
var Eleitorado = require('../models/model-eleitorado.js');

router.get("/", function(req, resp) {
	resp.send("<h1>Eleitorado</h1>");
});

router.get('/pesquisar/municipios', function(req, res) {
  Eleitorado.aggregate([{ $group: {_id: "$MUNICIPIO"}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
//  Eleitorado.aggregate([{ $group: {_id: "$MUNICIPIO", NR_ZONA : {$push : "$NR_ZONA"}}}], function(err, data) {
router.get('/pesquisar/ufs-municipios-nrzonas', function(req, res) {
  Eleitorado.aggregate([{ $group: {_id: {UF: req.query.uf, MUNICIPIO: req.query.municipio, NR_ZONA_ID:"$NR_ZONA"}}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/uf-municipio-nrzona', function(req, res) {
  Eleitorado.aggregate([{ $group: {_id: {UF_ID: "$UF", MUNICIPIO_ID : "$MUNICIPIO", NR_ZONA_ID:"$NR_ZONA"}}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/ufs-municipios', function(req, res) {
  Eleitorado.aggregate([{ $group: {_id: {UF: req.query.uf, MUNICIPIO_ID : "$MUNICIPIO"}}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/nrzonas', function(req, res) {
  Eleitorado.aggregate([{ $group: {_id: "$NR_ZONA"}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/ufs', function(req, res) {
  Eleitorado.aggregate([{ $group: {_id: "$UF"}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar', function(req, res) {
  Eleitorado.find({UF: req.query.uf, MUNICIPIO: req.query.municipio, NR_ZONA: req.query.nrzona}, function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});

//router.get('/listacompletaeleitorado', function(req, res) {
//	Eleitorado.find(function(err, data) {
//    if (err) {
//      res.sendStatus(404);
//    } else {
//      res.json(data);
//    }
//	});
//});
//router.post('/', function(req, res) {
//	var eleitorado = new Eleitorado(req.body);

//	eleitorado.save(function(err, data) {

///		console.log(data);

//		if (err) {
//			res.status(400).json(err);
//		} else {
//			res.status(201).json(data);
//		}
//	});
//});
module.exports = router;
