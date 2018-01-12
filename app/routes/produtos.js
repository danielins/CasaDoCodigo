module.exports = (app) => {

  // configura rota para p�gina de produtos
  app.get('/produtos', (req, res) => {

    // cria conex�o com o banco usando m�dulo
    const connection = app.data.dbConnection();

    // objeto da classe de consulta aos produtos
    const produtos = new app.data.produtosBanco(connection);

    produtos.lista((err, results) => {
      // variavel lista usar� os valores retornados
      res.render('produtos/lista', {lista: results});
    });

    // fecha conex�o
    connection.end();

  });


  app.get('/produtos/novo', (req, res) => {

    res.render('produtos/form');

  });


  app.post('/produtos/', (req, res) => {

    const connection = app.data.dbConnection();

    const produtos = new app.data.produtosBanco(connection);

    const novoProduto = req.body;

    produtos.salva(novoProduto, (err, results) => {
      res.redirect('/produtos');
    });

  });

}
