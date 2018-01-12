// Define classe para m�todos de consulta de produtos
function ProdutosBanco(connection){
  this._connection = connection;
};

ProdutosBanco.prototype.lista = function(callback){
  this._connection.query('select * from produtos', callback);
};

ProdutosBanco.prototype.salva = function(novoProduto, callback){
  this._connection.query('insert into produtos set ?', novoProduto, callback);
};

module.exports = function(){

  // retorna objeto da classe
  return ProdutosBanco;

};
