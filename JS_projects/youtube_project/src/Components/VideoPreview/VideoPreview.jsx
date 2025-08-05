import styles from "./VideoPreview.module.css"

import React from 'react'
import { Link } from "react-router-dom";
const VideoPreview = () => {
  return (
   <div className={styles.home_mainPage}>
        <Link to={'/watch/9095'} className={styles.youtube_video}>
          <div className={styles.videoBox}>
            <img
              alt=""
              className={styles.youtubePic}
              src="https://i.ytimg.com/vi/4K7Up3a_o8E/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLBsGbq2pfDjyexJQrISjKrBK6nJeQ"
            ></img>
            <div className={styles.timeVideo}>7:00</div>
          </div>
          <div className={styles.youtubeTitleBox}>
            <div className={styles.youtubePicBox}>
              <img
                alt="profile picture"
                className={styles.profile_picture}
                src="https://yt3.googleusercontent.com/L9JTnaEo2kUblF5KGzzVfWLXB4U5mz5it5duJeLgcTytJGdDH44ef3Bs9ZMsZYtkPETovLXrvDU=s120-c-k-c0x00ffffff-no-rj"
              />
            </div>
            <div className={styles.youtubeTitleBox_Info}>
              <div className={styles.youtubeTitleBox_Title}>
                Otters Chow Down on Their Top 3 Snacks
              </div>
              <div className={styles.youtubeTitleBox_AuthorName}>KOTSUMET</div>
              <div className={styles.youtubeTitleBox_Statistics}>
                95K views • 13 days ago
              </div>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default VideoPreview