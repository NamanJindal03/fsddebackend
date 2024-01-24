const express = require('express');
require('dotenv').config()
const app = express();
const fs = require('fs');
const path = require('path');
// const cors = require('cors');
// app.use(cors());

//cors option -> array -> ['http://www.facebook.com', ]


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.text({type: 'text/*'}));
app.use('/', require('./routes/root'))
// app.get('/', (req, res)=>{
//     res.json({name: 'naman', age: 10})
// })

// app.post('/', (req, res) => {
//     console.log(req.body.name);
//     res.send('checking body')
// })

app.listen(process.env.PORT, ()=>{
    console.log(`listening at port ${process.env.PORT} `)
})