const express = require('express');
const app = express();
//additional step 
require('./mongotest2')();
const routes = require('./route/root')


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',routes )


app.listen(3200, ()=>{
    console.log(`listening at port 3200 `)
})