
import React, { useState } from 'react'
import './Profile_Page.css'
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OptionsSectionMenu from '../OptionsSectionMenu/OptionsSectionMenu';
const Profile_Page = () => {
     const [subscribe, setSubscribe] = useState(false);

  const subscribeFunction = () => {
    setSubscribe(!subscribe);
  };
  return (
   <div className="profile_page">
        <div className="profile_top_section">
          <div className="profile_top_section_profile">
            <img
              alt="profile picture"
              className="commentPic"
              src="https://yt3.googleusercontent.com/L9JTnaEo2kUblF5KGzzVfWLXB4U5mz5it5duJeLgcTytJGdDH44ef3Bs9ZMsZYtkPETovLXrvDU=s120-c-k-c0x00ffffff-no-rj"
            />
          </div>
          <div className="profile_top_section_About">
            <div className="profile_top_section_ChannelName">KOTSUMET</div>
            <div className="profile_top_section_Info">
              @KOTARO_OTTER <p>• 1.99M subscribers • 1.3K videos</p>
            </div>
            <div className="profile_top_section_Describe">
              Welcome to Otters Kotaro and Hana Channel!
            </div>
            <div className="links"></div>

            <div className="buttonSection" onClick={subscribeFunction}>
              {!subscribe ? (
                <button className="btnSubscribe">Subscribe</button>
              ) : (
                <div className="btnSubscribedSection">
                  <NotificationsNoneIcon />
                  <button className="subscribedBtn">Subscribed</button>
                  <KeyboardArrowDownIcon />
                </div>
              )}
            </div>
          </div>
        </div>
        <OptionsSectionMenu/>
        
        <div className="videosUser"></div>
  
      </div>
  )
}

export default Profile_Page