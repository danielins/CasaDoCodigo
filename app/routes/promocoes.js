module.exports = function(app){

  app.get('/promocoes/form', (req, res) => {

    const connection = app.data.dbConnection();
    const produtos = new app.data.produtosBanco(connection);

    produtos.lista((err, results) => {
      res.render('promocoes/form', {lista: results});
    });

  });


  app.post('/promocoes', (req, res) => {

    var promocao = req.body;

    console.log('promocao', promocao);
    app.get('io').emit('novaPromocao', promocao);

    res.redirect('promocoes/form');

  });

}
