const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const superheroes = require('./models/superheroes');
const villian = require('./models/villian');



app.get('/superheroes',(req,res) => {
    res.render('../view/index.ejs', {
        superheroesList : superheroes,
        villianList : villian
    });
});

app.get('/superheroes/:id',(req,res) => {
    res.render('../view/show.ejs', {
        displaySuperHero : superheroes[req.params.id],
        displayVillian : villian[req.params.id]
        
    });
});


app.listen(port, () => {
    console.log(`Here to save the day at port: ${port}`)
})