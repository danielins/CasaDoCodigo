module.exports = function(){

  // retorna objeto da classe
  return function(connection){

    // @param query feita no banco
    // @param função que dispara quando a consulta for concluída
    this.lista = function(callback){
      connection.query('select * from produtos', callback);
    }

    return this;

  }

}
