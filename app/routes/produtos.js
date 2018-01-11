// configura rota para p�gina de produtos
module.exports = (app) => {

  app.get('/produtos', (req, res) => {

    // cria conex�o com o banco usando m�dulo
    const connection = app.data.dbConnection();

    // objeto da classe de consulta aos produtos
    const produtos = app.data.produtosBanco(connection);

    produtos.lista((err, results) => {
      // variavel lista usar� os valores retornados
      res.render('produtos/lista', {lista: results});
    });

    // fecha conex�o
    connection.end();

  });

}
