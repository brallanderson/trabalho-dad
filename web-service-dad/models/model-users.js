//model de dados do usuarios
var mongoose = require('mongoose');

var schemaUsuarios = new mongoose.Schema({

CPF: {type: String },
PASSWORD: {type: String },
MUNICIPIO: {type: String },
EMAIL: {type: String }

});

module.exports = mongoose.model('Usuario', schemaUsuarios);
