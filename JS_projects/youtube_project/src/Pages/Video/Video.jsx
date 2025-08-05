import React from 'react'
import './Video.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
const Video = () => {
  return (
    <div className='video'>
      <div className="videoPost">
        <div className="video_youtube">
          <video width="400" controls autoPlay className='video_youtube_current'>
<source src={'https://www.youtube.com/watch?v=4K7Up3a_o8E&ab_channel=KOTSUMET'} type='video/mp4'/>
<source src={'https://www.youtube.com/watch?v=4K7Up3a_o8E&ab_channel=KOTSUMET'} type='video/webm'/>
          </video>
            </div>
            <div className="video_youtubeAbout">
              <div className="title_video">
              Otters Chow Down on Their Top 3 Snacks
              </div>
              <div className="profileBlock_video">
                <div className="profileInfo">
                    <div className="profileInfoPic">
  <img alt="profile picture" class="profile_picture" src="https://yt3.googleusercontent.com/L9JTnaEo2kUblF5KGzzVfWLXB4U5mz5it5duJeLgcTytJGdDH44ef3Bs9ZMsZYtkPETovLXrvDU=s120-c-k-c0x00ffffff-no-rj"/>
                    </div>
                    <div className="viewProfileInfo">
                    <div className="userName">
                      KOTSUMET
                    </div>
                    <div className="subscribeCount">
                      1.99M subscribers
                    </div>
                    </div>
                    <div className="subscribeBtn">Subscribe</div>
                </div>
                <div className="likeBlock">
                  <div className="likeBlock_like">
<ThumbUpOffAltIcon/>
<div className="countLikes">
  {`4.5K`} 
</div>
<div className="divider"></div>
  <div className="likeBlock_like">
<ThumbDownOffAltIcon/>

</div>
                  </div>
                </div>
              </div>
              <div className="video_description">
                <div className="video_data">
                video_data
                </div>
                <div className="video_description_text">
                  video_description_text
                </div>
              </div>
            </div>
            <div className="commentSection">
              <div className="commentSectionTitle">284 Comments</div>
              <div className="userComment ">
                 <img alt="profile picture" class="commentPic" src="https://yt3.ggpht.com/S2VC32_30glRfn_kSgXbTkIxhWeJ6twEWLeHkv70TDpgowfze909MQHQ9OamQ6tr7_yBEehL=s88-c-k-c0x00ffffff-no-rj"/>
             <div className="createComment">
                  <input type="text" className='createCommentInput' placeholder='Add a comment...'/>
                  <div className="cancelAndSubmit">
                     <div className="cancelComment">Cancel</div>
                     <div className="cancelComment submitBtnComment ">Comment</div>
                  </div>
              </div>
              </div>
             <div className="commentOtherSection">
              <div className="commentSectionSelf">
                 <img alt="profile picture" class="commentPic" src="https://yt3.ggpht.com/S2VC32_30glRfn_kSgXbTkIxhWeJ6twEWLeHkv70TDpgowfze909MQHQ9OamQ6tr7_yBEehL=s88-c-k-c0x00ffffff-no-rj"/>
                 <div className="others_commentSection">
                  <div className="others_commentSectionHeader">
                    <div className="others_commentSectionChannelName">User</div>
                      <div className="others_commentSectionDate"> 3 weeks ago </div>
                  </div>

                  <div className="commentText">
                    Comment text 
                  </div>

                 </div>
              </div>
            </div>
      </div>
            </div>

            
      <div className="videoSuggestions">
     <div className="videoSuggestionsSection">
      <div className="videoThumbnail">
        <img alt="" className='videoThumbnailPic' src="https://i.ytimg.com/vi/i6ucE1cfzmE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLDdZ1cnPXf8-1cjog7o87va-TPBMQ"></img>
      </div>
      <div className="videoThumbnailAbout">
<div className="videoThumbnailTitle">
  The Process of Making Friends With a Tiny Spider
</div>
<div className="videoThumbnailProfile">
Worcester Terrariums
</div>
<div className="videoThumbnailProfile">
 1.8M views • 1 month ago
</div>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Video