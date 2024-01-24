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

router.get('/blogs/:blogId/:nextId/:testId', (req, res) => {
    //over here I want to 
    console.log(req.params);
    res.send('sample')
})

router.get('/blogs', (req, res) => {
    console.log(req.query);
    res.send('understanding query')
})

// router.get('/pokemon', (req, res) => {
//     res.send('random pokemon sent')
// })

// router.post('/pokemon', (req, res)=>{
//     res.send('random pokemon succesfully recevied')
// })

// router.delete('/pokemon/:id', (req, res) => {
//     res.send(`pokemon with id ${req.params.id} succesfully deleted`)
// })

router.route('/pokemon')
    .get((req, res) => {
        res.send('random pokemon sent')
    })
    .post((req, res)=>{
        res.send('random pokemon succesfully recevied')
    })

router.route('/pokemon/:id')    
    .delete((req, res) => {
        res.send(`pokemon with id ${req.params.id} succesfully deleted`)
    })
    .put((req, res)=>{
        res.send(`pokemon with id ${req.params.id} succesfully updated`)
    })

module.exports = router