var app = require('./config/express')();

// configura rota
app.get('/produtos', (req, res) => {
  res.render("produtos/lista");
});

// inicia o servidor
app.listen(3000, () => {
  console.log('Servidor está rodando.');
});
