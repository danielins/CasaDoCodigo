module.exports = (app) => {

  // configura rota para página de produtos
  app.get('/produtos', (req, res) => {

    // cria conexão com o banco usando módulo
    const connection = app.data.dbConnection();

    // objeto da classe de consulta aos produtos
    const produtos = new app.data.produtosBanco(connection);

    produtos.lista((err, results) => {
      // variavel lista usará os valores retornados
      res.render('produtos/lista', {lista: results});
    });

    // fecha conexão
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
