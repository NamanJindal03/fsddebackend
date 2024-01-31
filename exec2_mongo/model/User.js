const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
})

//the above part is the end to schema cretion -> 

//model function acceptts 
//1) name of the model
/* 
    important point about model -> 
        1) They should be singular]
        2) The first name of the model should be capitalised
*/
//2) whose model we have to create -> the schema

module.exports = mongoose.model('User', userSchema)
// const userModel = mongoose.model('User', userSchema);
// module.exports = userModel;