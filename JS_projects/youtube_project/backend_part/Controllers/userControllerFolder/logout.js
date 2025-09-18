import {cookieOptions} from './cookieOption.js'
 const logout = (req, res) => {
res.clearCookie('token', cookieOptions).json({message:"Logged out successfully", success:true});
}
export default logout;