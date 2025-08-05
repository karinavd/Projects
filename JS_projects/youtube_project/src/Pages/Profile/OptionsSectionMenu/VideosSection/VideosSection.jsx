import VideoPreview from '../../../../Components/VideoPreview/VideoPreview'
import './VideosSection.css'
import React from 'react'

const VideosSection = () => {
  return (
    <div className='mainVideo'>
        {
          
            [...Array(20)].map((x,i)=>(
                <VideoPreview key={i}/>
  ))
        }
    </div>
  )
}

export default VideosSection