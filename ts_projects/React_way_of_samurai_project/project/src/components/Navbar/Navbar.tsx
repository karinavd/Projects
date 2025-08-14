import styles from './Navbar.module.css'
import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
   <nav className={styles.navMainContainer}>
<div className={styles.item}>
<NavLink to="/profile" className={styles.navLinkClassName}>Profile</NavLink>
</div>
<div className={styles.item}>
<NavLink to="/messages" className={styles.navLinkClassName}>Messages</NavLink>
</div>

<div className={styles.item}>
<a href="">Music</a>
</div>
<div className={styles.item}>
<a href="">News</a>
</div>
<div className={styles.item}>
<a href="">Settings</a>
</div>
   </nav>
  )
}

export default Navbar