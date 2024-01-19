const express = require('express');
require('dotenv').config()
const app = express();
const path = require('path')

app.post('/book', (req, res)=>{
    //updating book in the db
    //some kind of file or db operation 
    //then sending json -> 
   res.send('post hit')
})
//Type 1 middleware syntax -> 
// app.get('/book', (req, res, next)=>{
//     console.log('doing some oprocessing');
//     // next()
// })

// app.get('/book', (req, res) => {
//     console.log('i got the request over here')
//     res.send('middlewares executes')
// })

// //type 2 middleware synta
// app.get('/book', (req, res, next) => {
//     console.log('i got the request over here');
//     next();
// }, (req, res, next) => {
//     console.log('we are not done yet')
//     next()
// },(req, res) => {
//     console.log('final proccessing')
//     res.send('type 2 middleware')
// } )









app.delete('/book', (req, res)=>{
    res.send('delete hit')
})





/* 
    middlewares -> next
*/








app.get('/', function (req, res) {
    // console.log(req);
    console.log(res);
    // res.write('<h1>this is my html h1 </h1>')
    res.send('<h2>this is my html h1 </h2>')
})


app.get('/about', function (_, re) {
    res.send('this is about page')
})
app.get('/blog', function (req, res) {
    res.send('this is blog central page')
})




app.get('/page', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/home', function(req, res) {
    res.redirect(301, '/') //status code redirection -> 
})

app.get('/*', (req, res) => {
    res.status('404').send('this route does not exist');
})

app.listen(process.env.PORT, ()=>{
    console.log('listening at port 3000')
})
