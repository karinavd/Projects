import React, { useState } from "react";

import "./Profile.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Profile_Page from "./Profile_Page/Profile_Page";
const Profile = ({ sideNav }) => {
 

  return (
    <div className="profile">
      <Sidebar sideNav={sideNav} />
     <Profile_Page/>
    
    </div>
  );
};

export default Profile;
