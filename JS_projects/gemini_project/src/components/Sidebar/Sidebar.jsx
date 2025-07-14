import React,{useContext, useState} from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'
const Sidebar = () => {
    const [extended,setExtended] = useState(false)
    const {onSent,prevPrompts,setPrevPrompts,setRecentPrompt,newChat}=useContext(Context)

    const loadPrompt = async (prompt)=>{
      setRecentPrompt(prompt)
   await  onSent(prompt)
    }
  return (
    <div className='sidebar'>
        <div className="top">
<img  className='menu' src={assets.menu_icon} alt="" onClick={()=>setExtended(x=>!x)}/>
<div className="new-chat" onClick={newChat}>
    <img  className='menu' src={assets.plus_icon} alt="" />
   {extended? <p>New Chat</p>:null}
</div>
{extended?<div className="recent">
    <p className="recent-title">Recent</p>
    {prevPrompts.map((item,index)=>{
return (
<div className="recent-entry" key={`prompt-${index}`} onClick={()=>loadPrompt(item)}>
         <img  className='menu' src={assets.message_icon} alt="" />
         <p>{item.slice(0,18)} ...</p>
    </div>
)
    })}
    
</div>:null}
        </div>
        <div className="bottom">
            <div className="botton-item recent-entry">
                  <img  className='menu' src={assets.question_icon} alt="" />
                 {extended? <p>Help</p>:null}
            </div>
              <div className="botton-item recent-entry">
                  <img  className='menu' src={assets.history_icon} alt="" />
                 {extended? <p>Activity</p>:null}
            </div>
              <div className="botton-item recent-entry">
                  <img  className='menu' src={assets.setting_icon} alt="" />
                 {extended? <p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar



// import React, { useContext, useState } from 'react'
// import './Sidebar.css'
// import { assets } from '../../assets/assets'
// import { Context } from '../../context/context'

// const Sidebar = () => {
//     const [extended, setExtended] = useState(false)
//     const { onSent, prevPrompts, setPrevPrompts, setRecentPrompt,newChat } = useContext(Context)

//     const loadPrompt = async (prompt) => {
//         // Встановлюємо поточний промпт
//         setRecentPrompt(prompt)
//         // Викликаємо onSent з промптом
//         await onSent(prompt)
//     }

//     const startNewChat = () => {
//         // Очищаємо дані для нового чату
//         setRecentPrompt("")
//         // Можете додати інші дії для нового чату
//     }

//     return (
//         <div className='sidebar'>
//             <div className="top">
//                 <img className='menu' src={assets.menu_icon} alt="" onClick={() => setExtended(x => !x)} />
//                 <div className="new-chat" onClick={startNewChat}>
//                     <img className='menu' src={assets.plus_icon} alt="" />
//                     {extended ? <p>New Chat</p> : null}
//                 </div>
//                 {extended ? (
//                     <div className="recent">
//                         <p className="recent-title">Recent</p>
//                         {Array.isArray(prevPrompts) && prevPrompts.length > 0 ? (
//                             prevPrompts.map((item, index) => {
//                                 return (
//                                     <div 
//                                         className="recent-entry" 
//                                         key={`prompt-${index}`} 
//                                         onClick={() => loadPrompt(item)}
//                                     >
//                                         <img className='menu' src={assets.message_icon} alt="" />
//                                         <p>{item.slice(0, 18)} ...</p>
//                                     </div>
//                                 )
//                             })
//                         ) : (
//                             <p>No recent chats</p>
//                         )}
//                     </div>
//                 ) : null}
//             </div>
//             <div className="bottom">
//                 <div className="bottom-item recent-entry">
//                     <img className='menu' src={assets.question_icon} alt="" />
//                     {extended ? <p>Help</p> : null}
//                 </div>
//                 <div className="bottom-item recent-entry">
//                     <img className='menu' src={assets.history_icon} alt="" />
//                     {extended ? <p>Activity</p> : null}
//                 </div>
//                 <div className="bottom-item recent-entry">
//                     <img className='menu' src={assets.setting_icon} alt="" />
//                     {extended ? <p>Settings</p> : null}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar