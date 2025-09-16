import { createRequire } from "module"
import { data } from "react-router-dom"

const require = createRequire(import.meta.url)
import User from '../Modals/user.js'
const bcrypt = require('bcryptjs')  
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
export const login=async(req,res)=>{    
    try{
        const{userName,password}=req.body;
        const existingUser=await User.findOne({userName});
        if(!existingUser){
            return res.status(404).json({message:"User not found",success:false})
        }
        const isPasswordValid = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid credentials",success:false})
        }
        res.status(200).json({message:"Login successful",success:true,data:existingUser})
    }catch(e){
        res.status(500).json({message:"Something went wrong",success:false})
    }
}

