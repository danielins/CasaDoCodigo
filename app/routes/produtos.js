// configura rota para página de produtos
module.exports = (app) => {

  app.get('/produtos', (req, res) => {

    const SQL = require('mysql');

    // cria conexão com o banco
    const connection = SQL.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'daniel',
      database: 'casadocodigo'
    });

    // @param query feita no banco
    // @param função dispara quando a consulta for concluída
    connection.query('select * from produtos', (err, results) => {
      // variavel lista usará os valores retornados 
      res.render('produtos/lista', {lista: results});
    });

    // fecha conexão
    connection.end();

  });

}
