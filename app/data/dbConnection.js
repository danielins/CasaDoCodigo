const SQL = require('mysql');

function createDBConnection(){

  // cria conexão com o banco
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
