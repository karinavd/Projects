import React from 'react'
import './Analytics.css'
const Analytics = () => {
  return (
  

<div class="container">
  <div class="main">
    <h1>Channel analytics</h1>
    <h2>Your channel didn’t get any views in the last 28 days</h2>
    <div class="stats">
      <div class="stat">Views—</div>
      <div class="stat">Watch time (hours)—</div>
      <div class="stat">Subscribers—</div>
    </div>
    <div class="graph"></div>
    <button class="btn">See more</button>
  </div>

  <div class="sidebar">
    <h3>Realtime</h3>
    <p>0 Subscribers</p>
    <button class="btn">See live count</button>
    <p>0 Views · Last 48 hours</p>
    <div ></div>
    <button class="btn">See more</button>
  </div>
</div>

)}

export default Analytics