// Exemplo de aplicação android requisitando dados em JSON

const http = require('http');

const config = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  headers: {
    //'Accept': 'text/html'
    'Accept': 'application/json'
  }
};

http.get(config, (res) => {
  res.on('data', (body) => {
    console.log('Corpo: ' + body);
  });
});
