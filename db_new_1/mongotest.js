const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //mongoose.connect('mongodb:localhost)
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('db connected success')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


/* 
    Schema -> 
    Profile -> 
        {
            name: String,
            age: Number,
            dob: Date,
            .....
        }

*/