// Define classe para métodos de consulta de produtos
function ProdutosBanco(connection){
  this._connection = connection;
}

ProdutosBanco.prototype.lista = function(callback){
  this._connection.query('select * from produtos', callback);
}

module.exports = function(){

  // retorna objeto da classe
  return ProdutosBanco;

}
