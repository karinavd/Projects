import React,{useState} from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const PlayIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    enableBackground="new 0 0 24 24" 
    height="24" 
    viewBox="0 0 24 24" 
    width="24" 
    focusable="false" 
    aria-hidden="true"
    fill="white"
  >
    <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
  </svg>
);
const GoLive =()=>(
  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" fill='white'><g><path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path></g></svg>
);

const CreatePost =()=>(
  <svg xmlns="http://www.w3.org/2000/svg" height="24" fill='white' viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="m15.01 7.34 1.64 1.64L8.64 17H6.99v-1.64l8.02-8.02m0-1.42-9.02 9.02V18h3.06l9.02-9.02-3.06-3.06zm2.9-1.49 1.67 1.67-.67.67-1.67-1.67.67-.67m0-1.41L15.83 5.1l3.09 3.09L21 6.11l-3.09-3.09zM21 10h-1v10H4V4h10V3H3v18h18V10z"></path></svg>
)


const Navbar = () => {
  const[userPic,setUserPic]=useState("https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar")
 const [navModal,setNavModal] = useState(false)
  return (
  <div className="navbar">
    <div className="navbar-left">
  <div className="navbarHamb">
    <MenuIcon sx={{color:"white"}}/>
  </div>
  <div className="logoImgNavbar">
    <YouTubeIcon className='logoImage'/>
    <div className="navbarTitle">Youtube</div>
  </div>

</div>
<div className="navbar-center">
  <div className="navbar_search">
    <input type="text" placeholder='Search'  className='navbar_searchInput'/>
    <div className="navbar_searchIconBox">
      <SearchIcon className='searchIcon'/>
    </div>
  </div>
  <div className="navbar_mic">
    <MicIcon/>
  </div>
  </div>
  <div className="navbar-right">
  <div className='btn-navbar-right' onClick={()=>setNavModal(x=>!x)}>
<AddIcon/> <p>Create</p>
  </div>
  <NotificationsNoneIcon className='notificationsNoneIcon'/>
  <img src={userPic} className='avaImgNavBar' alt="" />
{navModal&&<div className="navbar-modal">
  <div className="navbar-option-modal">
  <PlayIcon className="playIconImg"/>
   <p>Upload video</p> 
  </div>
   <div className="navbar-option-modal">
  <GoLive className="goLiveImg"/>
   <p>Go live</p> 
  </div>
   <div className="navbar-option-modal">
  <CreatePost className="createPostImg"/>
   <p>Create post</p> 
  </div>
</div>}
  </div>

  </div>
  )
}

export default Navbar
