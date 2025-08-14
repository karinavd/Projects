import styles from './Header.module.css'
import React from 'react'

const Header = () => {
  return (
   <header className={styles.header}>
    <img src="https://i.pinimg.com/736x/5d/cc/47/5dcc479ba7ac23b39791a6e3ac54abaa.jpg" alt="" className={styles.headerImg}/>
   </header>
  )
}

export default Header