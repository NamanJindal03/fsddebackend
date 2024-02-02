const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    address1: String,
    address2: String
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    address: {
        type: addressSchema,
        required: true
    },
    friend: [mongoose.Schema.ObjectId]
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

//most asked interview question
userSchema.virtual('fullName').get(function(){
    console.log('called right now')
    return `${this.name} ${this.lastName}`
})

userSchema.methods.greet = function(){
    console.log('Hey! I am ', this.name)
}

//pre and post hook -> cover -> 
userSchema.pre('findOne', function(next){
    console.log('I came in the pre middleware')
    // this.lastTimeFetched = Date.now()
    next()
})


userSchema.post('findOne', function(data, next){
    console.log('I am the last thingg which is getting implemented')
    // this.lastTimeFetched = Date.now()
    console.log(data);
    next()
})

module.exports = mongoose.model('User', userSchema)
// const userModel = mongoose.model('User', userSchema);
// module.exports = userModel;