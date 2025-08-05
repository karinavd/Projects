import { Link } from 'react-router-dom'
import './SignUp.css'
import React, { useState } from 'react'

const SignUp = () => {
  const [signUpField,setSignUpField] = useState({"email":'',"channelName":"","userName":"","password":""})
 const handleOnChandeInput=(event,name)=>{
  setSignUpField({...signUpField,[name]:event.varget.value})
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