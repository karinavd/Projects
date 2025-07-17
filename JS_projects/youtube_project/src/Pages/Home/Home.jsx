import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HomePage from '../../Components/HomePage/HomePage'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <HomePage/>
    </div>
  )
}

export default Home