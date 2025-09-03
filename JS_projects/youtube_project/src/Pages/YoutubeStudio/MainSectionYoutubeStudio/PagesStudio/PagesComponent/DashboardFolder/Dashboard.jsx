import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import VideoPreview from "../../../../../../Components/VideoPreview/VideoPreview";
const UploadImage = () => {
  return (
    <img
      id="upload-illustration"
      alt=""
      className={styles.imgUpload}
      src="https://www.gstatic.com/youtube/img/creator/no_content_illustration_v4_darkmode.svg"
    ></img>
  );
};
const LinkImage=()=>{
  return (<svg  
      viewBox="0 0 24 24" className={styles.linkImage}><g><path d="M21,21H3V3h9v1H4v16h16v-8h1V21z M15,3v1h4.32l-8.03,8.03L12,12.74l8-8V9h1V3H15z" ></path></g></svg>)
}
const PreviewVideo=()=>{
  return (<img alt="" className={styles.previewVideo} src="https://www.gstatic.com/youtube/img/promos/7f4cf462c47451755634c60170bae6d25e3a22301069d7c24e040bb172f9ef5f_1280x720.jpeg"></img>)
}
const Dashboard = () => {
  const [count,setCount] = useState(0);
  return (
    <div className={styles.dashboardSection}>
      <h1>Channel dashboard</h1>
      <div className={styles.uploadDragAndDropMainSection}>
        <div className={styles.uploadDragAndDropExternal}>
          <div className={styles.uploadDragAndDrop}>
            <UploadImage />
            <p className={styles.uploadDragAndDropParagraph}>
              Want to see metrics on your recent video?
              <br />
              Upload and publish a video to get started.
            </p>
            <button className={styles.btnUploadVideo}>Upload video</button>
          </div>
        </div>
        <div className={styles.statistics}>
          <div className={styles.statisticsSectionAnalytics}>
          <p className={styles.statisticsParagraph}>Channel analytics</p>
          <p className={styles.currentSubscribers}>Current subscribers</p>
          <p className={styles.countSubscribers}>{count}</p>
          </div>
          <div className={styles.summary}>
            <p className={styles.summaryParagragh}>Summary</p>
            <div className={styles.uploadDragAndDropParagraph}>Last 28 days</div>
            <div className={styles.statisticsSection}>
              <p>Views</p>
              <p>0 —</p>
            </div>
            <div className={styles.statisticsSection}>
              <p>Watch time (hours)</p>
              <p>0.0 —</p>
            </div>
            </div>
            <div className={styles.TopVideos}>
              <p className={styles.summaryParagragh}>Top videos</p>
              <p className={styles.uploadDragAndDropParagraph}>Last 48 hours · Views</p>
            </div>
            <div className={styles.btnAnalytics}>Go to channel analytics</div>
          
        </div>
        <div className={styles.thirdSection}>
          <div className={styles.creatorInsider}>
            <p className={styles.statisticsParagraph}>Creator Insider</p>
            <div className={styles.video}>
              <PreviewVideo />
            </div>
            <div className={styles.description}>
              <p>This Week at YouTube</p>
              <p>
                Today's topics: Post image limit increase, YouTube Promote
                improvements for websites, and the ability to edit videos with
                auto-dubbed tracks
              </p>
            </div>
            <div className={styles.btnAnalytics}>Watch on YouTube</div>
          </div>
          <div className={styles.whatsNewSection}>
            <p>What's new in Studio</p>
            <div className={styles.whatsNewSectionElement}>
              <p>Increasing Shorts length</p>
              <LinkImage/>
            </div>
            <div className={styles.whatsNewSectionElement}>
              <p>Expansion of channel permissions</p>
              <LinkImage/>
            </div>
            <div className={styles.whatsNewSectionElement}>
              <p>Upcoming changes to Community Guidelines warnings</p>
              <LinkImage/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navDashboardSection}>
      <div className={styles.navDashboardSectionElement}>
        <a href="https://www.youtube.com/t/terms" target="_blank">Terms of use</a>
        <LinkImage/>
        </div>
      <div className={styles.navDashboardSectionElement}>
        <a href="https://policies.google.com/privacy?hl=en" target="_blank">Privacy policy</a>
        <LinkImage/>
        </div>
      <div className={styles.navDashboardSectionElement}>
        <a href="https://www.youtube.com/howyoutubeworks/our-policies/" target="_blank">Polities & Safety</a>
        <LinkImage/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
