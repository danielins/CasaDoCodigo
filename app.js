// carrega biblioteca express
var app = require('./config/express')();

// carrega módulo de rotas
var rotasProdutos = require('./app/routes/produtos')(app);

// inicia o servidor
app.listen(3000, () => {
  console.log('Servidor está rodando.');
});
