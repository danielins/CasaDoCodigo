module.exports = function(){

  // retorna objeto da classe
  return function(connection){

    // @param query feita no banco
    // @param fun��o que dispara quando a consulta for conclu�da
    this.lista = function(callback){
      connection.query('select * from produtos', callback);
    }

    return this;

  }

}
