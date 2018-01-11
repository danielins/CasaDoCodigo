// configura rota para p�gina de produtos
module.exports = (app) => {

  app.get('/produtos', (req, res) => {

    const SQL = require('mysql');

    // cria conex�o com o banco
    const connection = SQL.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'daniel',
      database: 'casadocodigo'
    });

    // @param query feita no banco
    // @param fun��o dispara quando a consulta for conclu�da
    connection.query('select * from produtos', (err, results) => {
      // variavel lista usar� os valores retornados 
      res.render('produtos/lista', {lista: results});
    });

    // fecha conex�o
    connection.end();

  });

}
