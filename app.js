// carrega biblioteca express
var app = require('./config/express')();

// inicia o servidor
app.listen(3000, () => {
  console.log('Servidor está rodando.');
});
