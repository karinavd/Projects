import {createRequire} from "module"
import { ref } from "process";
const require = createRequire(import.meta.url)
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'video',
        required:true
    },
    message:{
        type:String,
       
        required:true
    },
},{timestamps:true})

mongoose.exports=mongoose.model('comment',commentSchema)