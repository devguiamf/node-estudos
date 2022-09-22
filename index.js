const express = require('express');
const app = express()                                
app.set('view engine', 'ejs')// Estou dizendopara o JS para usar o ejs como engine 
app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.render('index') 
    
})

app.get('/perguntar', (req, res)=> {
    res.render('perguntar') 
    
})


app.listen(8080,()=>{
    console.log('app rodando');
})