var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./config/db.js');

app.use(bodyParser.urlencoded({ extended: true })); // Servidor será capaz de pocessar requisições codificadas em formato UTF-8, e processar objetos passados na requisição(função estabelecida pelo parametro extended)
app.use(bodyParser.json()); // Servidor será capaz de processar requisições e dados no formato JSON

app.disable('x-powered-by');

var api = {};

//comentar ou remover depois que aplicaçao estiver funcionando
/* Hello API */
app.get("/", function(req, resp) {
	resp.send("<h1>Hello Word!</h1>");
});

api.Eleitorado = require('./routes/route-eleitorado.js')
app.use('/api/eleitorado',api.Eleitorado);

api.Candidato = require('./routes/route-candidatos.js')
app.use('/api/candidatos',api.Candidato);

api.Usuario = require('./routes/route-usuario.js')
app.use('/api/usuarios', api.Usuario);

//api.gerais = require('./routes/routes-gerais.js');
//app.use('/', api.gerais);



module.exports = app;
