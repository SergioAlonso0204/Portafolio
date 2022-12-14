const express = require ('express');
const app = express();
const port = 3000;

const path = require('path');
app.use('/static',express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views',__dirname+ '/views')



app.get('/', (req, res) => {
   
   
    res.render('Index')
});

app.get('/Academico', (req, res) => {
    res.render('academico', {
    titulo: "Seccion Academico",
    descripcion: "Aqui encontraras mi formacion adacemica"
    })
});

app.get('/informacion', (req, res) => {
    res.render('Informacion', {
    titulo: "Seccion Personal",
    descripcion: "Aqui encontraras mi informacion personal"
    })
});

app.get('/laboral', (req, res) => {
    res.render('laboral', {
    titulo : "Seccion Laboral",
    descripcion: "Aqui encontraras mi experiencia laboral"
    })
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname+'/public/404.html')
})



app.listen(port, () => {
    console.log(`Acceda al servidor haciendo click aqui http://localhost:${port}`)
});







