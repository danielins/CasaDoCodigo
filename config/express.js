var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = () => {

  var app = express();

  // configura motor de visualização
  app.set('view engine', 'ejs');

  // configura caminho das views
  app.set('views', './app/views');

  // middleware de codificação do corpo de requisições
  // podem receber urlencoded (a partir de formulários) e json
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // middleware de validação
  app.use(expressValidator());

  // carrega todas as rotas e todas funções do banco
  load('routes', {cwd: 'app'}).then('data').into(app);

  return app;

}
