import { createRequire } from 'module';
const require = createRequire(import.meta.url)
import User from '../../Modals/user.js'
import { cookieOptions } from './cookieOption.js';  
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
export const login=async(req,res)=>{    

    try{
        const{userName,password}=req.body;
        const existingUser=await User.findOne({userName});
        const token = jwt.sign({id:existingUser._id},'secretKey')
            res.cookie('token',token,cookieOptions)
        if(!existingUser){
            
            return res.status(404).json({message:"User not found",success:false})
        }
        const isPasswordValid = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid credentials",success:false})
        }
        res.status(200).json({message:"Login successful",success:true,data:existingUser,token})
    }catch(e){
        res.status(500).json({message:"Something went wrong",success:false})
    }
}
