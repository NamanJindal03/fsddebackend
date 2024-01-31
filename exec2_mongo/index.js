const express = require('express');
const app = express();
//additional step 
require('./mongotest2')();
const User = require('./model/User');

async function createUser(){
    try{
        const user1 = await User.create({
            name: 'kartik',
            age: 14,
            gender: 'male'
        })
        console.log(user1);
    }
    catch(err){
        console.log(err);
    }
}
// createUser();

async function findUserById(){
    try{
        const searchedUser = await User.findById('65ba76286c1c037ce6e4de3e')
        console.log(searchedUser);
    }
    catch(err){
        console.log(err);
    }
}
// findUserById()


async function deleteOneUser(){
    try{
        const searchedUser = await User.deleteOne({age: 10})
        //{id: <document_id>}
        console.log(searchedUser);
    }
    catch(err){
        console.log(err);
    }
}

// deleteOneUser()
async function updateUser(){
    try{
        const searchedUser = await User.updateOne({name: 'kartik'}, {age: 20})
        //{id: <document_id>}
        console.log(searchedUser);
    }
    catch(err){
        console.log(err);
    }
}
updateUser()






// require('dotenv').config()
// const fs = require('fs');
// const path = require('path');
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(express.text({type: 'text/*'}));
// app.use('/', require('./routes/root'))




// app.listen(3200, ()=>{
//     console.log(`listening at port 3200 `)
// })