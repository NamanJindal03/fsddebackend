const express = require('express');
require('dotenv').config()
const app = express();
const fs = require('fs');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.text({type: 'text/*'}));
app.use('/', require('./routes/root'))




app.listen(3200, ()=>{
    console.log(`listening at port 3200 `)
})