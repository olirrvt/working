const express = require("express");
const app = express();
const port = 3040;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    const importStyle = "../style/index.css"
    const indexStyle = "../style/entrar.css"
    response.render('index', { importStyle, indexStyle })
});

app.get('/cadastro', (request, response) => {
    const importStyle = "../style/cadastrar.css"
    const indexStyle = "../style/index.css"
    response.render('pages/cadastro', { importStyle, indexStyle })
});

app.get('/login', (request, response) => {
    const importStyle = "../style/login.css"
    const indexStyle = "../style/index.css"
    response.render('pages/login', { importStyle, indexStyle })
});

app.get('/empresas', (request, response) => {
    const importStyle = "../style/empresas.css"
    const indexStyle = "../style/index.css"
    response.render('pages/empresas', { importStyle, indexStyle })
});

app.get('/vagas', (request, response) => {
    const importStyle = "../style/vagas.css"
    const indexStyle = "../style/index.css"
    response.render('pages/vagas', {importStyle, indexStyle})
});

app.listen(port, () => {
    console.log(`Frontend server: running on port ${port}`)
});