const User = require('../model/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;


async function signupUser(req, res){
    const {name, email, confirmPassword, lastName, address1, address2} = req.body;
    const searchedUser = await User.findOne({email});

    const randomFriends = await User.find({}).limit(3).exec()
    const randomFriendsObjectId = randomFriends.map((user)=>{
        return user._id
    })
    console.log(randomFriends)
    if(searchedUser){
        res.json({status: 'failure', message: 'email already exists'})
    }
    if(confirmPassword !== req.body.password){
        return res.status(400).json({
            status: 'failed', 
            message: 'password and confirm password are not same'
        })
    }
    const password = await bcrypt.hash(req.body.password, saltRounds);


    console.log(randomFriendsObjectId);


   try{
    const address= {
        address1, address2
    }
    await User.create({
        name, email, password, confirmPassword, lastName, address, friend: randomFriendsObjectId
    })
    return res.status(201).json({status: 'success', message: 'user created successfully'})
   }
   catch(err){
    console.log(err);
    return res.status(400).json({
        status: 'failed', 
        message: 'could not create, try again later'
    })
   }
}
async function loginUser(req, res){
    const {email, password} = req.body;
    const searchedUser = await User.findOne({email});
    
    try{
        const match = await bcrypt.compare(password, searchedUser.password);
        if(match){
            return res.json({status:'success', message: 'login success'})
        }
        return res.json({status: 'failed', message:'either password or email is incorrect'})
    }
    catch(err){
        console.log(err)
        return res.json({status: 'failed', message:'could not login, try later'})
    }
}

async function getUserDetails(req, res){
    const {email} = req.body;
    const searchedUser = await User.findOne({email});
    console.log(searchedUser.fullName);
    console.log(searchedUser.greet())
    console.log(searchedUser.lastTimeFetched)
    return res.json({searchedUser})
}

async function fetchPaginatedUsers(req, res){
    const pageSize = req.query.page_size || 10
    const pageNo = req.query.page_no || 1
    const users = await User.find({})
        .skip((pageNo-1)*pageSize)
        .limit(pageSize)
    res.json({users})
}
module.exports = {signupUser, loginUser, fetchPaginatedUsers, getUserDetails}