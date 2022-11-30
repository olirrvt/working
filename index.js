const express = require("express");
const app = express();
const port = 3040;

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, resp) => {
    const importStyle = "../style/index.css"
    const indexStyle = "../style/entrar.css"
    resp.render('index', { importStyle, indexStyle })
});

app.get('/cadastro', (req, resp) => {
    const importStyle = "../style/cadastrar.css"
    const indexStyle = "../style/index.css"
    resp.render('pages/cadastro', { importStyle, indexStyle })
});

app.get('/login', (req, resp) => {
    const importStyle = "../style/login.css"
    const indexStyle = "../style/index.css"
    resp.render('pages/login', { importStyle, indexStyle })
});

app.get('/empresas', (req, resp) => {
    const importStyle = "../style/empresas.css"
    const indexStyle = "../style/index.css"
    resp.render('pages/empresas', { importStyle, indexStyle })
});

app.get('/cadastroEmpresa', (req, res) => {
    const importStyle = "../style/cadastroEmpresa.css"
    const indexStyle = "../style/index.css"
    res.render('pages/cadastroEmpresa', { importStyle, indexStyle });
});

app.get('/vagas', (req, resp) => {
    const importStyle = "../style/vagas.css"
    const indexStyle = "../style/index.css"
    resp.render('pages/vagas', {importStyle, indexStyle})
});

app.listen(port, () => {
    console.log(`Frontend server: running on port ${port}`)
});