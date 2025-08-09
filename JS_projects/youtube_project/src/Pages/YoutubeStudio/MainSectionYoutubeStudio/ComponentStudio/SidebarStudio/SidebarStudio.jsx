import SidebarInfoChannel from "./SidebarComponents/SidebarInfoChannel/SidebarInfoChannel"
import SidebarOptions from "./SidebarComponents/SidebarOptionsFolder/SidebarOptions"
import styles from "./SidebarStudio.module.css"
import React from 'react'

const SidebarStudio = () => {
  return (
    <>
    <SidebarInfoChannel/>
    <SidebarOptions/>
    </>
  )
}

export default SidebarStudio