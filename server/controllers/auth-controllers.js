const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req,res)=>{
    try {
        res.status(200).send("hello prajapati");


    } catch (error) {
        console.log(error);
    }
}

const register = async(req,res)=>{
try {
    const {username,password,email,phone}= req.body;

    const userExist =await User.findOne({email})
    if(userExist){
        return res.status(400).send("user already exist")
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password,saltRound);


    const user = await User.create({username,password,email,phone})
    
    
    // console.log(user);
    res.status(200).json({message:user});
        

} catch (error) {
    console.log(error);
}
}

const login =  async(req,res)=>{
    try {
        const {email,password}= req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).send("user not found")
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).send("invalid password")
            }
            res.status(200).json({message:user});

        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={home,register,login};