var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = () => {

  var app = express();

  // para carregamento de recursos estáticos (CSS, JS, etc)
  app.use(express.static('./app/public'));

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

  // middleware para página 404
  app.use((req, res, next) => {
    res.status(404).render('erros/404');
    next();
  });

  // middleware para página erro 500
  app.use((erro, req, res, next) => {
    if ( process.env.NODE_ENV === 'production' ){
      res.status(404).render('erros/500');
      return false;
    }
    next(erro);
  });

  return app;

}
