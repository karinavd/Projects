import { Route,Routes} from 'react-router-dom'
import DragAndDrop from '../ComponentStudio/DragAndDrop/DragAndDrop'
import NavbarStudio from '../ComponentStudio/NavbarStudio/NavbarStudio'
import SidebarStudio from '../ComponentStudio/SidebarStudio/SidebarStudio'
import './PagesStudio.css'
import React from 'react'
import Dashboard from './PagesComponent/DashboardFolder/Dashboard'


const PagesStudio = () => {
  return (
    <>
    <NavbarStudio/>
    <div className="pageView">
    <SidebarStudio className='sidebarStudio'/>
    <DragAndDrop className='dragAndDrop'/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </div>
    </>
  )
}

export default PagesStudio