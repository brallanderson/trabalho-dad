//model de dados do eleitorado
var mongoose = require('mongoose');

var schemaEleitorado = new mongoose.Schema({

PERIODO: {type: Number },
UF: {type: String },
MUNICIPIO: {type: String },
COD_MUNICIPIO_TSE: {type: Number },
NR_ZONA: {type: Number },
SEXO: {type: String },
FAIXA_ETARIA: {type: String },
GRAU_DE_ESCOLARIDADE: {type: String },
QTD_ELEITORES_NO_PERFIL: {type: Number }

});

module.exports = mongoose.model('Eleitorado', schemaEleitorado);
