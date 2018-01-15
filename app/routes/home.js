module.exports = (app) => {

  // configura rota para página principal
  app.get('/', (req, res, next) => {

    const connection = app.data.dbConnection();

    const produtos = new app.data.produtosBanco(connection);

    produtos.lista((err, results, fields) => {
      res.render('home/index', { livros: results });
    });

    connection.end();

  });

}
