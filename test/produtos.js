// Teste das rotas de produtos
// !IMPORTANTE! Usar variável de ambiente de teste
// Usar no prompt [raíz do projeto]: NODE_ENV=test node_modules/mocha/bin/mocha

const express = require('../config/express')();
const request = require('supertest')(express);

describe('#ProdutosController', function(){

  // antes de cada teste, limpa as tabelas do banco
  beforeEach(function(done){
    const conn = express.data.dbConnection();
    conn.query('delete from produtos', function(err, result){
      if (!err){
        done();
      }
    });
  });

  // teste de retorno de JSON
  it('#listagem json', function(done){

    request.get('/produtos')
    .set('Accept', 'application/json')
    .expect('Content-type', /json/)
    .expect(200, done);

  });

  it('#cadastro de produto com dados inválidos', function(done){

    request.post('/produtos')
    .send({ titulo: '', descricao: 'novo produto' })
    .expect(400, done);

  });

  it('#cadastro de produto com dados válidos', function(done){

    request.post('/produtos')
    .send({ titulo: 'titulo teste', descricao: 'novo produto', preco: 20 })
    .expect(302, done);

  });

});
