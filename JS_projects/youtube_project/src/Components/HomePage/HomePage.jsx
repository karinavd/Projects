import React from "react";
import { assets } from "../../assets/assets";
import "./HomePage.css";
import { Link } from "react-router-dom";
import VideoPreview from "../VideoPreview/VideoPreview";
const HomePage = () => {
  const category = [
    "All",
    "Music",
    "Gaming",
    "JavaScript",
    "SpaceEngine",
    "Meow",
    "AI",
    "Mixes",
    "Podcasts",
    "Posture",
    "Algorithms",
    "Comic books",
    "Beach Volleyball",
    "Volleyball",
    "Live",
    "Media theories",
    "High-intensity interval training",
    "Ambient Music",
    "Recently uploaded",
    "Watched",
    "New to you",
  ];
  return (
    <div className="homePage">
      <div className="homePage-options">
        {category.map((item, index) => {
          return (
            <div className="homePage-option" key={index}>
              {item}
            </div>
          );
        })}
      </div>
     <VideoPreview/>
    </div>
  );
};

export default HomePage;
