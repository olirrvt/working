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

app.get('/recrutar', (request, response) => {
    const importStyle = "../style/recrutar.css"
    const indexStyle = "../style/index.css"
    response.render('pages/recrutar', { importStyle, indexStyle })
});

app.get('/curriculos', (request, response) => {
    response.render('pages/curriculos')
});

app.listen(port, () => {
    console.log(`Frontend server: running on port ${port}`)
});