import { createRequire } from "module"

const require = createRequire(import.meta.url)
const User = require('../Modals/user')

exports.signUp = async (req,res)=>{
    console.log("in signUp func")
}