
import jwt  from 'jsonwebtoken';
import User from '../Modals/user.js';      
export const auth = async (req,res,next)=>{
    const token = req.cookies.token ;
    if(!token){
        return res.status(401).json({message:"No token found",success:false})
    }
    else{
    try{
        const decode = jwt.verify(token, 'secretKey');
req.user= await User.findById(decode.id).sleect('-password');


    }
    catch(e){
        return res.status(401).json({message:"Invalid token",success:false  })
    }
}
}