import styles from './NavbarStudio.module.css'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
const YouTubeIconStudio=()=>{
    return (
        <img height="24" alt="" class="style-scope ytcp-home-button" src="https://www.gstatic.com/youtube/img/creator/yt_studio_logo_v2_darkmode.svg"></img>
    )
}
const NavbarStudio = () => {
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

    </div>
    <div className={styles.navbarRight}>

    </div>
    </div>
    </>
  )
}

export default NavbarStudio