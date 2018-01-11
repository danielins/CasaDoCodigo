// configura rota para página de produtos
module.exports = (app) => {
  app.get('/produtos', (req, res) => {
    res.render("produtos/lista");
  });
}
