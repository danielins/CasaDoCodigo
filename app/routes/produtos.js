module.exports = (app) => {

  // configura rota para p�gina de produtos
  app.get('/produtos', (req, res) => {

    // cria conex�o com o banco usando m�dulo
    const connection = app.data.dbConnection();

    // objeto da classe de consulta aos produtos
    const produtos = new app.data.produtosBanco(connection);

    produtos.lista((err, results) => {

      // Responde um formato diferente de acordo com o tipo de conte�do solicitado
      res.format({
        // se o formato requisitado for HTML
        html: function(){
          res.render('produtos/lista', {lista: results});
        },
        json: function(){
          res.json(results);
        }
      });

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
