const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT =3000;

app.listen(PORT, function(){
    console.log('o express esta rodando na porta ' + PORT);
});

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