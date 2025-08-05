import { Link } from "react-router-dom";
import VideoPreview from "../../../../Components/VideoPreview/VideoPreview";
import "./HomeSection.css";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
const QueuePic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M21 16h-7v-1h7v1zm0-5H9v1h12v-1zm0-4H3v1h18V7zm-11 8-7-4v8l7-4z"></path>
    </svg>
  );
};
const WatchLaterPic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
    </svg>
  );
};
const SavePlayListPic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M20 12h-8v8h-1v-8H3v-1h8V3h1v8h8v1z"></path>
    </svg>
  );
};
const DownLoad = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
    </svg>
  );
};
const SharePic = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
    </svg>
  );
};
const HomeSection = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="mainHomeSection">
    <div className="homeSection">
      <Link to={"/watch/9095"} className="youtube_video">
        <div className="videoBox">
          <img
            alt=""
            className="youtubePic"
            src="https://i.ytimg.com/vi/4K7Up3a_o8E/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLBsGbq2pfDjyexJQrISjKrBK6nJeQ"
          ></img>
          <div className="timeVideo">7:00</div>
        </div>

        <div className="youtubeTitleBox_Info">
          <div className="youtubeTitleBox_Title">
            Otters Chow Down on Their Top 3 Snacks
            
          </div>
          <div className="youtubeTitleBox_AuthorName"></div>
          <div className="youtubeTitleBox_Statistics">
          KOTSUMET  95K views • 13 days ago
          </div>
          <div className="describeVideo">
            【Part2】Otter Squad’s Wild Summer River Adventure! https://youtu.be/mFjwTzhV6P0
【Aty&amp;Ui】
https://www.youtube.com/@Aty0730
【Springs Village】
https://www.springs-village.com

Welcome...
          </div>
        </div>
      </Link>
       <div className="youtubeTitleBox_options" onClick={() => setShowOptions(!showOptions)}>
            <button
              className="moreVertIconBtn"
              
            >
              <MoreVertIcon />
            </button>
           {showOptions&& <div className="showOptionsSection">
              <div className="optionTask">
                <QueuePic />
                <p>Add to queue</p>
              </div>

              <div className="optionTask">
                <WatchLaterPic />
                <p>Save to Watch later</p>
              </div>

              <div className="optionTask">
                <SavePlayListPic />
                <p>Save to playlist</p>
              </div>
              <div className="optionTask">
                <DownLoad />
                <p>Download</p>
              </div>
              <div className="optionTask">
                <SharePic />
                <p>Share</p>
              </div>
            </div>}
            </div>
    </div>
    <div className="forYouSection">
      <h2>For you</h2>
      <div className="videosForYouSection">
      <VideoPreview className="videoForYou"/>
      <VideoPreview className="videoForYou"/>
      <VideoPreview className="videoForYou"/>
      </div>
    </div>
    <div className="popularVideos">
      <p>Popular Videos</p>
       <div className="popularVideosSection">
        
      <VideoPreview className="videoForYou"/>
      <VideoPreview className="videoForYou"/>
      <VideoPreview className="videoForYou"/>
      </div>
    </div>
    </div>
  );
};

export default HomeSection;
