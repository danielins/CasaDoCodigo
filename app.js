// carrega biblioteca express
var app = require('./config/express')();

// importa socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

// disponibiliza a variável do io para toda a aplicação
app.set('io', io);

// inicia o servidor
http.listen(3000, () => {
  console.log('Servidor está rodando.');
});
