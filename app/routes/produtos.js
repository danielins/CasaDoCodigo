// configura rota para p�gina de produtos
module.exports = (app) => {
  app.get('/produtos', (req, res) => {
    res.render("produtos/lista");
  });
}
