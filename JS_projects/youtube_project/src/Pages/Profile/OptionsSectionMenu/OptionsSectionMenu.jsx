import './OptionsSectionMenu.css'
import React from 'react'
import {Link, NavLink, Route, Routes, useParams} from 'react-router-dom'
import VideosSection from './VideosSection/VideosSection'
import HomeSection from './HomeSection/HomeSection'
const OptionsSectionMenu = () => {
  const { id } = useParams();
  return (
  //  <div className="optionsSection">
  //         <ul>
  //           <Routes>
  //           <li>Home</li>
  //           <Route path='/videos' element={<VideosSection/>}><li>Videos</li></Route>
  //           <li>Shorts</li>
  //           <li>Playlist</li>
  //           <li>Posts</li>
  //           </Routes>
  //         </ul>
         
  //       </div>
      <div>
      <div className="optionsSection">
        <ul>
          <li><NavLink to={`/user/${id}`}>Home</NavLink></li>
          <li><NavLink to={`/user/${id}/videos`}>Videos</NavLink></li>
          <li><NavLink to={`/user/${id}`}>Shorts</NavLink></li>
          <li><NavLink to={`/user/${id}`}>Playlist</NavLink></li>
          <li><NavLink to={`/user/${id}`}>Posts</NavLink></li>
        </ul>
      </div>
       <div className="content-area">
        <Routes>
          <Route path="" element={<HomeSection/>} />
          <Route path="videos" element={<VideosSection/>} />
          {/* <Route path="shorts" element={<ShortsSection/>} />
          <Route path="playlist" element={<PlaylistSection/>} />
          <Route path="posts" element={<PostsSection/>} /> */}
        </Routes>
      </div>
    
     
    </div>
  )
}

export default OptionsSectionMenu