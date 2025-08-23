import React from 'react'
import styles from "./Dashboard.module.css"
const UploadImage=()=>{
    return <img id="upload-illustration" alt="" className={styles.imgUpload}  src="https://www.gstatic.com/youtube/img/creator/no_content_illustration_v4_darkmode.svg"></img>
}
const Dashboard = () => {
  return (
    <div className={styles.dashboardSection}>
        <h1>Channel dashboard</h1>
        <div className={styles.uploadDragAndDropMainSection}>
        <div className={styles.uploadDragAndDropExternal}>
        <div className={styles.uploadDragAndDrop}>
            <UploadImage/>
            <p className={styles.uploadDragAndDropParagraph}>Want to see metrics on your recent video?<br/>Upload and publish a video to get started.</p>
              <button className={styles.btnUploadVideo}>Upload video</button>
        </div>
        </div>
        <div className={styles.statistics}>
          <p className={styles.statisticsParagraph}>Channel analytics</p>
          <p className={styles.currentSubscribers}>Current subscribers</p>
          <p className={styles.currentSubscribersCount}>Channel analytics</p>
          <div className={styles.summary}>
            <p>Summary</p>
            <div className={styles.grayParagraph}>Last 28 days</div>    
            <div className={styles.statisticsSection}>
              <p>Views</p>
              <p>0 —</p>
              </div>       
               <div className={styles.statisticsSection}>
              <p>Watch time (hours)</p>
              <p>0.0	—</p>
              </div>   
              <div className={styles.TopVideos}>
                <p>Top videos</p>
                <p className={styles.grayParagraph}>Last 48 hours · Views</p>
                </div> 
                <div className={styles.btnAnalytics}>Go to channel analytics</div>   
 </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard