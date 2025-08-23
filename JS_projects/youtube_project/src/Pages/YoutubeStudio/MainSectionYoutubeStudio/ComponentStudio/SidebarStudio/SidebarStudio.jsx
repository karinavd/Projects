import SidebarInfoChannel from "./SidebarComponents/SidebarInfoChannel/SidebarInfoChannel"
import SidebarOptions from "./SidebarComponents/SidebarOptionsFolder/SidebarOptions"
import styles from "./SidebarStudio.module.css"
import React from 'react'

const SidebarStudio = () => {
  return (
    <>
    <div className={styles.sidebarStudioSection}>
    <SidebarInfoChannel/>
    <SidebarOptions/>
    </div>
    </>
  )
}

export default SidebarStudio