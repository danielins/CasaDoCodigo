const SQL = require('mysql');

function createDBConnection(){

  if ( process.env.NODE_ENV === 'test' ){
    // cria conexão com o banco de testes
    return SQL.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'daniel',
      database: 'casadocodigo_test'
    });
  }

  // cria conexão com o banco de produção
  return SQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'daniel',
    database: 'casadocodigo'
  });

};

module.exports = function(){
  return createDBConnection;
}
