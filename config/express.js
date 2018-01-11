var express = require('express');
var load = require('express-load');

module.exports = () => {

  var app = express();

  // configura motor de visualização
  app.set('view engine', 'ejs');

  // configura caminho das views
  app.set('views', './app/views');

  // carrega todas as rotas e todas funções do banco
  load('routes', {cwd: 'app'}).then('data').into(app);

  return app;

}
