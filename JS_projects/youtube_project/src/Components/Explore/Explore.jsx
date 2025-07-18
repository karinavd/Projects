import React from 'react'
// import {exploreData} from "./ExploreData"
const Explore = ({arrayData}) => {
  return (
    <div>
        {
            arrayData.map((x,index)=>(
<div key={index} className="home-sidebar-topOption">
        <div key={index} className="HomeIcon" dangerouslySetInnerHTML={{__html:x.image}}></div>
            <p>{x.name}</p>
        </div>
            ))
        }
    </div>
  )
}

export default Explore