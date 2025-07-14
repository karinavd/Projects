import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {
    const {onSent, recentPrompt,showRes,loading,resData,input,setInput} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.photo_monkey} alt="" />
        </div>
        <div className="main-container">
            {!showRes?
            <>
            <div className="greet">
                <p><span>Hello, User.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Voluptate aliquid ex nulla vitae rem cum unde veritatis, autem eligendi quas quaerat eius quae dignissimos nemo nam ab modi voluptas facilis.</p>
                   <img src={assets.compass_icon} alt="" />
                </div>
                  <div className="card">
                    <p>Optio beatae aut, quidem itaque, labore, ratione maxime neque id ex consequuntur obcaecati, deserunt incidunt ratione provident?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                  <div className="card">
                    <p>Molestias labore aliquam dolor quaerat debitis adipisci  ducimus sint nisi nam labore.</p>
                      <img src={assets.message_icon} alt="" />
                </div>
                  <div className="card">
                  <p>Amet nemo ea facere id inventore itaque fuga, porro quo illo placeat sequi ipsum libero dolore recusandae eligendi vitae asperiores. </p>
                   <img src={assets.code_icon} alt="" />
                </div>
            </div>
</>
: <div className="result">
    <div className="result-title">
         <img src={assets.photo_monkey} alt="" />
         <p>{recentPrompt}</p>
    </div>
    <div className="result-data">
         <img src={assets.gemini_icon} alt="" />
         {loading?<div className='loader'>
<hr />
<hr />
<hr />
         </div>: <p dangerouslySetInnerHTML={{__html:resData}}></p>}
        
    </div>
</div>

}




            <div className="main-bottom">
                <div className="searchBox">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter a prompt here' />
                    <div>
                          <img src={assets.gallery_icon} alt="" />
                          <img src={assets.mic_icon} alt="" />
                         {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null} 
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main