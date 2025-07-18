import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

const App = () => {
  const [sideNav,setSideNav ] = useState(true);
  const setSideNavFunction=(val)=>{
setSideNav(val)
  }
  return (
    <>
    <Navbar setSideNavFunction={setSideNavFunction} sideNav={sideNav}/>
    <Home sideNav={sideNav}/>
    </>
  
  )
}

export default App