module.exports = (app) => {

  // configura rota para página de produtos
  app.get('/produtos', (req, res, next) => {

    // cria conexão com o banco usando módulo
    const connection = app.data.dbConnection();

    // objeto da classe de consulta aos produtos
    const produtos = new app.data.produtosBanco(connection);

    produtos.lista((err, results) => {

      // verificação de erros
      if ( err ){
        // se houver erros, executa a próxima função no fluxo atual
        return next(err);
      }

      // Responde um formato diferente de acordo com o tipo de conteúdo solicitado
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

    // fecha conexão
    connection.end();

  });


  // configura rota para página de novo produto
  app.get('/produtos/novo', (req, res) => {
    res.render('produtos/form', {erros: {}, produto: {}});
  });


  // configura rota para página que recebe cadastro de produtos
  app.post('/produtos/', (req, res) => {

    const connection = app.data.dbConnection();
    const produtos = new app.data.produtosBanco(connection);

    // objeto do novo produto a ser cadastrado
    const produto = req.body;

    // Validação
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('preco', 'Preço em inválido').isFloat();

    let validacao = req.validationErrors();

    // se encontrar erros, exibe-os de acordo com o tipo de resposta esperado
    // seta o status da requisição para 400 Bad Request
    if ( validacao ){
      res.format({
        html: function(){
          res.status(400).render('produtos/form', {erros: validacao, produto});
        },
        json: function(){
          res.status(400).json(validacao);
        }
      })

      return false;
    }

    // salva o produto e redireciona a página
    produtos.salva(produto, (err, results) => {
      res.redirect('/produtos');
    });

  });

}
