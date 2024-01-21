const express = require('express');

const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/profile', (req, res) => {
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



router.post('/compute', (req, res) => {
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

router.get('/', (req, res) => {
    console.log('getting handled');
    res.json({name: 'naman'})
})

module.exports = router