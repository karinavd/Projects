import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = ({setLogin}) => {
  const [loginSectionField,setLoginSectionField]= useState({'userName':"",'password':""})
 const handleOnChandeInput=(event,name)=>{
  setLoginSectionField({...loginSectionField,[name]:event.varget.value})
 }
  return (
    <div className='login'>
        <div className="login_card">
         <div className="login_titlecard">
            Login
         </div>
         <div className="credentialsLogin">
            <div className="userNameLogin">
                <input type="text" placeholder='Enter username..' value={loginSectionField.userName} onChange={(e)=>handleOnChandeInput(e,"userName")} className='userNameLoginInput' />
            </div>
            <div className="userNameLogin">
                <input type="password" placeholder='Enter password..' value={loginSectionField.password}onChange={(e)=>handleOnChandeInput(e,"password")} className='userNameLoginInput' />
            </div>
         </div>
         <div className="loginBtn">
          <div className="loginButton">Sign In
          </div>
          
          </div>
          <div className="signUpSection">
            <p>Don't have an account?</p>
<Link to={'/signUp'} className='noUnderLine' onClick={()=>setLogin(false)}><div className="btnSignUp">
  Sign Up
</div>
</Link>
         </div>
        </div>
    </div>
  )
}

export default Login