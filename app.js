const express       = require('express');
const exphbs        = require('express-handlebars');
const app           = express();
const path          = require('path');
const db            = require('./db/connection');
const bodyParser    = require('body-parser');

const PORT =3000;

app.listen(PORT, function(){
    console.log('o express esta rodando na porta ' + PORT);
});

// body parses
app.use(bodyParser.urlencoded({extended:false}));

//handle bars
app.set('views', path.join(_dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



// db conexao
db
.authenticate()
.then(()=> {
    console.log("conectou ao banco com sucesso") 
})
.catch(err => {
    console.log("Erro ao conectar com o banco")
});

// rotas
app.get('/', (req,res) => {
    res.send("ESTA FUNCIONANDO ");
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));