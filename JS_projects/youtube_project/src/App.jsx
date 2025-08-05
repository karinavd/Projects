import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import {Route,Routes } from 'react-router-dom'
import Video from './Pages/Video/Video'
import Profile from './Pages/Profile/Profile'
import VideosSection from './Pages/Profile/OptionsSectionMenu/VideosSection/VideosSection'
import SignUp from './Pages/SignUpFolder/SignUp'
import PagesStudio from './Pages/YoutubeStudio/MainSectionYoutubeStudio/PagesStudio/PagesStudio'
const MainPartApp=()=>{
  const [sideNav,setSideNav ] = useState(true);
  const setSideNavFunction=(val)=>{
setSideNav(val)
  }
  return (
    <>
    <Navbar setSideNavFunction={setSideNavFunction} sideNav={sideNav}/>
    <Routes>
      <Route path='/' element={ <Home sideNav={sideNav}/>}/>
      <Route path='/watch/:id' element={<Video/>}/>
      <Route path="/user/:id/*" element={<Profile sideNav={sideNav}/>}/>
      <Route path="/signUp" element={<SignUp/>}/>

        {/* <Route path="/" element={<HomeSection/>} /> */}
        {/* <Route path="/videos" element={<VideosSection/>} /> */}
        {/* <Route path="/shorts" element={<ShortsSection/>} />
        <Route path="/playlist" element={<PlaylistSection/>} />
        <Route path="/posts" element={<PostsSection/>} /> */}

    </Routes>
   
    </>
  
  )
}
const App = () => {
  
  return (
    <>
      <Routes>
      <Route path='/*' element={ <MainPartApp/>}/>
    <Route path='/studio' element={<PagesStudio/>}/>
    </Routes>
   
    </>
  
  )
}

export default App