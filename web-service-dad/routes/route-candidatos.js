var express = require('express');
var router = express.Router();
var Candidatos = require('../models/model-candidatos.js');

router.get("/", function(req, resp) {
	resp.send("<h1>Candidatos</h1>");
});

router.get('/pesquisar/ufs-municipios', function(req, res) {
  Candidatos.aggregate([{ $group: {_id: {UF_ID:"$SIGLA_UF", MUNICIPIO_ID : "$DESCRICAO_UE"}}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/ufs', function(req, res) {
  Candidatos.aggregate([{ $group: {_id: "$SIGLA_UF"}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/sexos', function(req, res) {
  Candidatos.aggregate([{ $group: {_id: "$DESCRICAO_SEXO"}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/escolaridades', function(req, res) {
  Candidatos.aggregate([{ $group: {_id: "$DESCRICAO_GRAU_INSTRUCAO"}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/partidos', function(req, res) {
  Candidatos.aggregate([{ $group: {_id: "$NOME_PARTIDO"}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});

router.get('/pesquisar/municipios', function(req, res) {
  Candidatos.aggregate([{ $group: {_id: "$DESCRICAO_UE"}}], function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});

router.get('/pesquisar/prefeitos', function(req, res) {
  Candidatos.find({ DESCRICAO_UE: req.query.municipio, DESCRICAO_CARGO: "PREFEITO"}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/prefeitos', function(req, res) {
  Candidatos.find({SIGLA_UF: req.query.uf, DESCRICAO_UE: req.query.municipio, DESCRICAO_CARGO: "PREFEITO"}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/vereadores', function(req, res) {
  Candidatos.find({SIGLA_UF: req.query.uf, DESCRICAO_UE: req.query.municipio, DESCRICAO_GRAU_INSTRUCAO: req.query.escolaridade, DESCRICAO_SEXO: req.query.sexo, NOME_PARTIDO: req.query.partido, DESCRICAO_CARGO: "VEREADOR"}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/vereadores', function(req, res) {
  Candidatos.find({SIGLA_UF: req.query.uf, DESCRICAO_UE: req.query.municipio, DESCRICAO_GRAU_INSTRUCAO: req.query.escolaridade, DESCRICAO_CARGO: "VEREADOR"}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/vereadores', function(req, res) {
  Candidatos.find({SIGLA_UF: req.query.uf, DESCRICAO_UE: req.query.municipio, DESCRICAO_GRAU_INSTRUCAO: req.query.escolaridade, DESCRICAO_SEXO: req.query.sexo, DESCRICAO_CARGO: "VEREADOR"}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/vereadores', function(req, res) {
  Candidatos.find({SIGLA_UF: req.query.uf, DESCRICAO_UE: req.query.municipio, DESCRICAO_GRAU_INSTRUCAO: req.query.escolaridade, NOME_PARTIDO: req.query.partido, DESCRICAO_CARGO: "VEREADOR"}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/vereadores', function(req, res) {
  Candidatos.find({SIGLA_UF: req.query.uf, DESCRICAO_UE: req.query.municipio, DESCRICAO_SEXO: req.query.sexo, DESCRICAO_CARGO: "VEREADOR"}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar/vereadores', function(req, res) {
  Candidatos.find({SIGLA_UF: req.query.uf, DESCRICAO_UE: req.query.municipio, NOME_PARTIDO: req.query.partido, DESCRICAO_CARGO: "VEREADOR"}, function(err, data){
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
router.get('/pesquisar', function(req, res) {
  Candidatos.find({NR_ZONA: req.query.nrzona, MUNICIPIO: req.query.municipio}, function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
