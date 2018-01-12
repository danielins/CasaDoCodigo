// Cadastra produtos importando um JSON

const http = require('http');

const config = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

const client = http.request(config, (res) => {
  res.on('data', (body) => {
    console.log(body.toString());
  });
});

const produto = {
  titulo: 'Livro JSON',
  descricao: 'Produto cadastrado via JSON importado',
  preco: 99
};

client.end(JSON.stringify(produto));
