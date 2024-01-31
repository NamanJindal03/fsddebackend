const User = require('../model/User');

async function createUser(req, res){
    const {name, age, gender} = req.body;
    try{
        const user1 = await User.create({
            name,
            age,
            gender
        })
        console.log(user1);
        res.status(200).json(user1)
    }
    catch(err){
        console.log(err);
        res.status(400).json({status: "error", message: "couldnt process the info"})

    }
}

module.exports = {createUser}