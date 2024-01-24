const express = require('express');
require('dotenv').config()
const app = express();
const fs = require('fs');
const path = require('path')
const axios = require('axios');
const cors = require('cors');

const whiteListServers = ["http://localhost:3000"];
const corsOptions = {
    origin: (origin, callback) => {
        console.log(origin);
        if(whiteListServers.indexOf(origin) != -1 || !origin){
            callback(null, true)
        }
        else{
            callback(new Error("you are not allowed to consume my resources."))
        }
    }
}

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.text({type: 'text/*'}));
// app.get('/', (req, res)=>{
//     res.json({name: 'naman', age: 10})
// })

// app.post('/', (req, res) => {
//     console.log(req.body.name);
//     res.send('checking body')
// })

app.post('/profile', (req, res) => {
    //use fs module to save the file
    fs.appendFile(path.join(__dirname, 'test.txt'), JSON.stringify(req.body), (err)=>{
        if(err) {
            console.log(err)
            res.json({success: false});
            return 
        }
        res.json({success: true})
    });
   
    
})

app.post('/compute', (req, res) => {
    const {name, hobbies} = req.body;

    // console.log(Array.isArray(hobbies));
    // console.log(hobbies);
    let hobbyString = "";
    // for(let i=0; i<hobbies.length; i++){
    //     console.log(hobbies[i]);
    //     hobbyString += hobbies[i];
    // }
    hobbies.forEach(element => {
        hobbyString+= element + " "
    });
    res.json({sentance: `My name is ${name} and my hobbies are ${hobbyString}`})
})

app.get('/testcors', (req, res)=>{
    // console.log('request coming')
    // axios.get('http://localhost:3500', { withCredentials: true })
    // .then((data)=>{
    //     console.log('called');
    //     res.json(
    //     {"something": "something"}
    //     )
    // })
    // .catch((err)=>{
    //     console.log('----------------------------->')
    //     console.log('err', err)
    // })
    res.json({"something": "something2"})
})

app.listen(3010, ()=>{
    console.log(`listening at port 3010`)
})
/* 
the numebr of servers you can have is equibvalnet to the number of empty ports -> server running -> 
make your system -> extremely bulky -> 
*/