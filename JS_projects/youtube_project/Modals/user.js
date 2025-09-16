import {createRequire} from "module"
const require = createRequire(import.meta.url)
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    channelName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        required:true
    },

},{timestamps:true})

const User=mongoose.model('user',userSchema)
  export default User;  