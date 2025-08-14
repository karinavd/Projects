import styles from './ProfileInfo.module.css'
import React from 'react'

const ProfileInfo = () => {
  return (
  <div className={styles.descriptionProfileInfo}>
  <img src="https://i.pinimg.com/736x/72/3c/3a/723c3a2e92ada15243a04a1e7171fff6.jpg" alt="" />
  <div className={styles.descriptionBlock}>
description
  </div>
  </div>
  )
}

export default ProfileInfo