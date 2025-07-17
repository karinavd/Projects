import React from 'react'
import {dataSubscriptions} from "./SubscriptionsData"
const Subscriptions = () => {
  return (
    <div>
       { dataSubscriptions.map((x,index)=>(
<div key={index} className="home-sidebar-topOption">
        
          <img src={x.image} className="HomeIcon" style={{borderRadius:"50%"}} />
            <p>{x.name}</p>
        </div>
       ))}
    </div>
  )
}

export default Subscriptions