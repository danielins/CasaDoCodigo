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

}
