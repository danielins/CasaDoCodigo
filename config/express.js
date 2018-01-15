var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = () => {

  var app = express();

  // para carregamento de recursos estáticos (CSS, JS, etc)
  app.use(express.static('./app/public'));

  // configura motor de visualiza��o
  app.set('view engine', 'ejs');

  // configura caminho das views
  app.set('views', './app/views');

  // middleware de codifica��o do corpo de requisi��es
  // podem receber urlencoded (a partir de formul�rios) e json
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // middleware de valida��o
  app.use(expressValidator());

  // carrega todas as rotas e todas fun��es do banco
  load('routes', {cwd: 'app'}).then('data').into(app);

  return app;

}
