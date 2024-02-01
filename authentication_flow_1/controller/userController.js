const User = require('../model/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;


async function signupUser(req, res){
    const {name, email, confirmPassword} = req.body;
    const searchedUser = await User.findOne({email});
    if(searchedUser){
        res.json({status: 'failure', message: 'email already exists'})
    }
    if(confirmPassword !== req.body.password){
        res.status(400).json({
            status: 'failed', 
            message: 'password and confirm password are not same'
        })
    }
    const password = await bcrypt.hash(req.body.password, saltRounds);

   try{
    await User.create({
        name, email, password, confirmPassword
    })
    res.status(201).json({status: 'success', message: 'user created successfully'})
   }
   catch(err){
    console.log(err);
    res.status(400).json({
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

async function fetchPaginatedUsers(req, res){
    const pageSize = req.query.page_size || 10
    const pageNo = req.query.page_no || 1
    const users = await User.find({})
        .skip((pageNo-1)*pageSize)
        .limit(pageSize)
    res.json({users})
}
module.exports = {signupUser, loginUser, fetchPaginatedUsers}