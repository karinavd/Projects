import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePage from '../../Components/HomePage/HomePage'
const Home = (props) => {
  return (
    <div className='home'>
      <Sidebar sideNav={props.sideNav}/>
      <HomePage/>
    </div>
  )
}

export default Home