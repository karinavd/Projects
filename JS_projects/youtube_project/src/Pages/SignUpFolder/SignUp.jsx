import { Link } from 'react-router-dom'
import './SignUp.css'
import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
  const [uploadedImageUrl,setUploadedImageUrl] = useState("https://pngtree.com/freepng/profile-line-black-icon_4008141.html")

  const [signUpField,setSignUpField] = useState({"email":'',"channelName":"","userName":"","password":"","profileImg":uploadedImageUrl})
  const handleOnChandeInput=(event,name)=>{
  setSignUpField({...signUpField,[name]:event.varget.value})
 }
 const uploadImage=async(e)=>{
const files = e.target.files;
const data= new FormData();
data.append('file',files[0])
data.append("upload_preset","youtube_project")
try{
const response = await axios.post("https://api.cloudinary.com/v1_1/doflvdhx5/image/upload",data)
const image = response.data.url;
setUploadedImageUrl(image)
setSignUpField({...signUpField,"profileImg":image})
}
catch(e){
  console.log(e)
}
 }
  return (
    <div className='signUp'>
      <div className="signUp_card">
      <div className="signUp_title">
        Sign Up
      </div>
      <div className="signUp_inputs">
                <input type="email"  className='signUp_input'  value={signUpField.email}  onChange={(e)=>handleOnChandeInput(e,"email")}  placeholder='Enter your email...' required />
        <input type="text" className='signUp_input' value={signUpField.channelName}  onChange={(e)=>handleOnChandeInput(e,"channelName")}  placeholder='Enter your channel name...'  required/>
        <input type="text" className='signUp_input'  value={signUpField.userName}  onChange={(e)=>handleOnChandeInput(e,"userName")} placeholder='Enter your user name...' required />
        <input type="password" className='signUp_input' value={signUpField.password} onChange={(e)=>handleOnChandeInput(e,"password")}   placeholder='Enter your password...'  required/>
    <div className="imgUpload"> <input type="file" onChange={(e)=>uploadImage(e)}/>
    <img src={uploadedImageUrl} className="imageUploaded" alt="" />
    </div>
     <div className="signUp_btn">
      <div className="signUpBtn">Sign Up</div>
      <Link to={'/'}className='noUnderLine'> <div className="signUpBtn">Back</div></Link>
     </div>

      </div>
      </div>
    </div>
  )
}

export default SignUp