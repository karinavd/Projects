import styles from './NavbarStudio.module.css'
import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const CreateIcon=()=>{
  return (
    <svg   height="24" className={styles.classIcon}  preserveAspectRatio="xMidYMid meet" focusable="false" ><g class="style-scope yt-icon"><path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" class="style-scope yt-icon"></path></g></svg>
  )
}
const HelpIcon =()=>{
return (<svg  height="24" className={styles.classIcon} preserveAspectRatio="xMidYMid meet" focusable="false" aria-hidden="true" ><g class="style-scope tp-yt-iron-icon"><path d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" class="style-scope tp-yt-iron-icon"></path></g></svg>
)}
const YouTubeIconStudio=()=>{
    return (
        <img height="24" alt=""   src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_v2_darkmode.svg"></img>
    )
}
const NavbarStudio = () => {
  const [userPic, setUserPic] = useState(
      "https://api-private.atlassian.com/users/6b5c1609134a5887d7f3ab1b73557664/avatar"
    );
  return (
    <>
    <div className={styles.navbar_Main}>
    <div className={styles.navbarLeft}>
        <div className={styles.navbarHamb} onClick={()=>{
            props.setSideNavFunction(!props.sideNav)
          }}>
          <MenuIcon sx={{ color: "black" }} />
        </div>
        <Link to={'/'} className={styles.logoImgNavbar}>
          <YouTubeIconStudio className={styles.logoImage} />
        </Link>
    </div>
    <div className={styles.navbarCenter}>
<div className="inputSection">
<SearchIcon className='classIcon'/>
<input type="text" className='inputCenterSection' />
</div>
    </div>
    <div className={styles.navbarRight}>
<HelpIcon />
<NotificationsNoneIcon/>
<div className={styles.createPart}>
  <CreateIcon /> <p>Create</p>
</div>
<img src={userPic} alt="" className={styles.classIcon}/>
    </div>
    </div>
    </>
  )
}

export default NavbarStudio