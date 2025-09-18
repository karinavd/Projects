import { createRequire } from "module"
import { data } from "react-router-dom"

const require = createRequire(import.meta.url)
import User from '../../Modals/user.js'
const bcrypt = require('bcryptjs') 
 const jwt = require('jsonwebtoken')
export const signUp = async (req,res)=>{
    try{
        const {channelName,userName,password,email,profilePic}=req.body;
        const isExistingUser = await User.findOne({userName});
    if(isExistingUser){
        return res.status(400).json({message:"User already exists"})
    }
    else{
        let updatedPassword = await bcrypt.hash(password,10)
  const newUser = new User({channelName,userName,password:updatedPassword,email,profilePic})
await newUser.save();
res.status(200).json({message:"User created successfully",success:true,data:newUser}) 
}
    }
    catch(e){
        res.status(500).json({message:"Something went wrong",success:false})
    }
    
}


