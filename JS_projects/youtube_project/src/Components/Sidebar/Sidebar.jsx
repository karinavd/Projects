import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import { assets } from "../../assets/assets";
const ShortsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    focusable="false"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="m7.61 15.719.392-.22v-2.24l-.534-.228-.942-.404c-.869-.372-1.4-1.15-1.446-1.974-.047-.823.39-1.642 1.203-2.097h.001L15.13 3.59c1.231-.689 2.785-.27 3.466.833.652 1.058.313 2.452-.879 3.118l-1.327.743-.388.217v2.243l.53.227.942.404c.869.372 1.4 1.15 1.446 1.974.047.823-.39 1.642-1.203 2.097l-.002.001-8.845 4.964-.001.001c-1.231.688-2.784.269-3.465-.834-.652-1.058-.313-2.451.879-3.118l1.327-.742Zm1.993 6.002c-1.905 1.066-4.356.46-5.475-1.355-1.057-1.713-.548-3.89 1.117-5.025a4.14 4.14 0 01.305-.189l1.327-.742-.942-.404a4.055 4.055 0 01-.709-.391c-.963-.666-1.578-1.718-1.644-2.877-.08-1.422.679-2.77 1.968-3.49l8.847-4.966c1.905-1.066 4.356-.46 5.475 1.355 1.057 1.713.548 3.89-1.117 5.025a4.074 4.074 0 01-.305.19l-1.327.742.942.403c.253.109.49.24.709.392.963.666 1.578 1.717 1.644 2.876.08 1.423-.679 2.77-1.968 3.491l-8.847 4.965ZM10 14.567a.25.25 0 00.374.217l4.45-2.567a.25.25 0 000-.433l-4.45-2.567a.25.25 0 00-.374.216v5.134Z"
      fillRule="evenodd"
    ></path>
  </svg>
);
const HistoryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    focusable="false"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z"
      fillRule="evenodd"
    ></path>
  </svg>
);
const LikesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    focusable="false"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="M14.813 5.018 14.41 6.5 14 8h5.192c.826 0 1.609.376 2.125 1.022.711.888.794 2.125.209 3.101L21 13l.165.413c.519 1.296.324 2.769-.514 3.885l-.151.202v.5c0 1.657-1.343 3-3 3H5c-1.105 0-2-.895-2-2v-8c0-1.105.895-2 2-2h2v.282c0-.834.26-1.647.745-2.325L12 1l1.1.472c1.376.59 2.107 2.103 1.713 3.546ZM7 10.5H5c-.276 0-.5.224-.5.5v8c0 .276.224.5.5.5h2v-9Zm10.5 9h-9V9.282c0-.521.163-1.03.466-1.453l3.553-4.975c.682.298 1.043 1.051.847 1.77l-.813 2.981c-.123.451-.029.934.255 1.305.284.372.725.59 1.192.59h5.192c.37 0 .722.169.954.459.32.399.357.954.094 1.393l-.526.876c-.241.402-.28.894-.107 1.33l.165.412c.324.81.203 1.73-.32 2.428l-.152.202c-.195.26-.3.575-.3.9v.5c0 .828-.672 1.5-1.5 1.5Z"
      fillRule="evenodd"
    ></path>
  </svg>
);
const PlaylistsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    focusable="false"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="M3.75 5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 5 20.25 5H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75S20.664 9 20.25 9H3.75Zm0 4c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-8.5Zm8.5 4c.414 0 .75.336.75.75s-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5Zm3.498-3.572c-.333-.191-.748.05-.748.434v6.276c0 .384.415.625.748.434L22 17l-6.252-3.572Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

const YouTubeMusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    focusable="false"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="M12 20.5c4.694 0 8.5-3.806 8.5-8.5S16.694 3.5 12 3.5 3.5 7.306 3.5 12s3.806 8.5 8.5 8.5Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-5c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Zm0 1c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6Zm-1.243-8.546c-.333-.2-.757.04-.757.43v4.233c0 .389.424.629.757.429L15 12l-4.243-2.546Z"
      fillRule="evenodd"
    ></path>
  </svg>
);
const SubscriptionsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    focusable="false"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      d="M4 4.5A1.5 1.5 0 015.5 3h13A1.5 1.5 0 0120 4.5H4Zm16.5 3h-17v11h17v-11ZM3.5 6A1.5 1.5 0 002 7.5v11A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 6h-17Zm7.257 4.454a.5.5 0 00-.757.43v4.233a.5.5 0 00.757.429L15 13l-4.243-2.546Z"
      fillRule="evenodd"
    ></path>
  </svg>
);
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Subscriptions from '../Subscriptions/Subscriptions'

const Sidebar = () => {
  return (
    <div className="home-sidebar">
      <div className="home-sidebar-top">
        <div className="home-sidebar-topOption">
          <HomeIcon className="HomeIcon" />
          <p>Home</p>
        </div>
        <div className="home-sidebar-topOption">
          <ShortsIcon className="HomeIcon" />
          <p>Shorts</p>
        </div>
        <div className="home-sidebar-topOption">
          <SubscriptionsIcon className="HomeIcon" />
          <p>Subscriptions</p>
        </div>
        <div className="home-sidebar-topOption">
          <YouTubeMusicIcon className="HomeIcon" />
          <p>YouTube Music</p>
        </div>
      </div>
      <div className="home-sidebar-middle">
        <div className="home-sidebar-topOption">
          <p>You</p>
          <ChevronRightIcon className="HomeIcon" />
        </div>
        <div className="home-sidebar-topOption">
          <HistoryIcon className="HomeIcon" />
          <p>History</p>
        </div>
        <div className="home-sidebar-topOption">
          <PlaylistsIcon className="HomeIcon" />
          <p>Playlists</p>
        </div>
        <div className="home-sidebar-topOption">
          <SmartDisplayOutlinedIcon className="HomeIcon" />
          <p>Your videos</p>
        </div>
        <div className="home-sidebar-topOption">
          <WatchLaterOutlinedIcon className="HomeIcon" />
          <p>Watch later</p>
        </div>
        <div className="home-sidebar-topOption">
          <LikesIcon className="HomeIcon" />
          <p>Watch later</p>
        </div>
      </div>
      <div className="home-sidebar-middle">
        <p className="subscriptions">Subscriptions</p>
 <Subscriptions/>

      </div>
    </div>
  );
};

export default Sidebar;
