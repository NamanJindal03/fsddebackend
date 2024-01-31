const mongoose = require('mongoose');
const dbConnect = async() => {
    try{
        await mongoose.connect("mongodb://localhost/test2")
        console.log("db connected")
    }
    catch(err){
        console.log(err);
    }
}
module.exports = dbConnect