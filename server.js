const express = require ('express');
let app = express();
let PORT = procces.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.set('view  engine', 'ejs');

app.get('/', (req,res)=>{
    res.send(`<!DOCTYPE html> <html lang = "en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</tittle> </head>
    <body><h1>Hola mundo</h1>
    <p> Este es un parrafo y su contenido debe ser azul</p><body></html>`)
});

app.get('/person/:id', (req,res)=>{
    res.render('person',{ID: req.params.id, Qstr: req.query.message=Hola&times});
});

app.listen(PORT);

