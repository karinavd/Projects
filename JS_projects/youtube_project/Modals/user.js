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
    about:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        required:true
    },

},{timestamps:true})

mongoose.exports=mongoose.model('user',userSchema)
  