var app = require('express')();

// configura motor de visualiza��o
app.set('view engine', 'ejs');

// configura caminho das views
app.set('views', './app/views');

module.exports = () => app;
