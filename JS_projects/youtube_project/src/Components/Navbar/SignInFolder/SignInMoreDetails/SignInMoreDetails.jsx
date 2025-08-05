import React, { useState } from "react";
import styles from "./SignInMoreDetails.module.css";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LanguageList from "./LanguageListFolder/LanguageList";
import KeyboardShortcuts from "./KeyboardShortcutsFolder/KeyboardShortcuts";
const DataIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconStyle}>
      <path d="m12 3.06 7 3.21v4.84c0 1.3-.25 2.6-.75 3.86-.15.37-.33.76-.55 1.17-.15.27-.31.54-.48.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-.56-3.91-1.97-5.23-3.98-.17-.27-.33-.54-.48-.81-.22-.41-.4-.79-.55-1.17-.48-1.26-.73-2.56-.73-3.86V6.27l7-3.21m0-1.1L4 5.63v5.49c0 1.47.3 2.9.81 4.22.17.44.37.86.6 1.28.16.3.34.6.52.88 1.42 2.17 3.52 3.82 5.95 4.44l.12.02.12-.03c2.43-.61 4.53-2.26 5.95-4.43.19-.29.36-.58.52-.88.22-.41.43-.84.6-1.28.51-1.33.81-2.76.81-4.23V5.63l-8-3.67zm1.08 10.15c-.32-.06-.64-.11-.96-.12A2.997 2.997 0 0012 6a2.996 2.996 0 00-.12 5.99c-.32.01-.64.06-.96.12C8.64 12.58 7 14.62 7 17h10c0-2.38-1.64-4.42-3.92-4.89zM10 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1.12 4.09c.37-.08.64-.11.88-.11s.51.03.88.11c1.48.3 2.63 1.46 3 2.91H8.12c.37-1.45 1.52-2.61 3-2.91z"></path>
    </svg>
  );
};
const LanguageIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconStyle}>
      <path d="m12.258 16.18-2.93-2.87c-.8.86-1.64 1.71-2.48 2.54l-2.25 2.25-.7-.7 2.25-2.25c.84-.84 1.68-1.69 2.48-2.55a15.891 15.891 0 01-2.9-4.18V8.4h1.14a14.96 14.96 0 002.44 3.45c1.59-1.81 2.89-3.69 3.43-5.7H2.078v-1h6.65V3h1v2.15h6.78v1h-2.73c-.54 2.32-2.01 4.42-3.77 6.42l2.63 2.58c-.13.35-.25.67-.38 1.03Zm9.25 4.83h-.95l-1.12-3.04h-4.91l-1.11 3.04h-.96l4.09-10.81h.87l4.09 10.81Zm-2.36-3.81-2.17-5.89-2.17 5.89h4.34Z"></path>
    </svg>
  );
};
const RestrictedModeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconStyle}>
      <path d="M12 20.95Q8.975 20.075 6.987 17.312Q5 14.55 5 11.1V5.7L12 3.075L19 5.7V11.35Q18.775 11.275 18.5 11.2Q18.225 11.125 18 11.075V6.375L12 4.15L6 6.375V11.1Q6 12.575 6.438 13.938Q6.875 15.3 7.625 16.438Q8.375 17.575 9.413 18.425Q10.45 19.275 11.625 19.725L11.675 19.7Q11.8 20 11.975 20.288Q12.15 20.575 12.375 20.825Q12.275 20.85 12.188 20.888Q12.1 20.925 12 20.95ZM17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17ZM17 20Q17.8 20 18.438 19.65Q19.075 19.3 19.5 18.7Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.5 18.7Q14.925 19.3 15.562 19.65Q16.2 20 17 20ZM17 21Q15.325 21 14.163 19.837Q13 18.675 13 17Q13 15.325 14.163 14.162Q15.325 13 17 13Q18.675 13 19.837 14.162Q21 15.325 21 17Q21 18.675 19.837 19.837Q18.675 21 17 21ZM12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Z"></path>
    </svg>
  );
};
const LocationIcon =()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconStyle}><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2ZM8.442 16c.232.993.545 1.88.917 2.624C10.211 20.327 11.202 21 12 21s1.789-.673 2.64-2.376c.373-.744.686-1.631.918-2.624H8.442Zm-4.505 0a9.019 9.019 0 005.547 4.64c-.912-1.064-1.64-2.69-2.067-4.64h-3.48Zm12.646 0c-.426 1.95-1.156 3.576-2.068 4.64A9.018 9.018 0 0020.062 16h-3.479ZM3.513 9A8.983 8.983 0 003 12c0 1.052.182 2.062.514 3h3.715A19.391 19.391 0 017 12c0-1.045.08-2.053.23-3H3.513Zm4.73 0A18.29 18.29 0 008 12c0 1.056.087 2.065.243 3h7.514c.156-.935.243-1.944.243-3s-.087-2.065-.243-3H8.243Zm8.527 0c.15.947.23 1.955.23 3s-.08 2.053-.23 3h3.716A8.982 8.982 0 0021 12a8.982 8.982 0 00-.514-3H16.77ZM9.484 3.358A9.02 9.02 0 003.938 8h3.479c.426-1.951 1.155-3.577 2.067-4.642ZM12 3c-.798 0-1.789.673-2.64 2.376-.373.744-.686 1.631-.918 2.624h7.116c-.232-.993-.545-1.88-.917-2.624C13.789 3.673 12.798 3 12 3Zm2.515.358c.912 1.065 1.642 2.69 2.068 4.642h3.48a9.02 9.02 0 00-5.548-4.642Z"></path></svg>
    )
}
const KeyboardShortcutsIcon=()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  className={styles.iconStyle}><path d="M16 16H8v-2h8v2zm0-5h-2v2h2v-2zm3 0h-2v2h2v-2zm-6 0h-2v2h2v-2zm-3 0H8v2h2v-2zm-3 0H5v2h2v-2zm9-3h-2v2h2V8zm3 0h-2v2h2V8zm-6 0h-2v2h2V8zm-3 0H8v2h2V8zM7 8H5v2h2V8zm15-3v14H2V5h20zm-1 1H3v12h18V6z"></path></svg>
    )
}
const HelpIcon =()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconStyle}><path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
    )
}
const FeedbackIcon=()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconStyle}><path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path></svg>
    )
}
const SignInMoreDetails = () => {
  const [showLanguage,setShowLanguage] =useState(false)
  return (
    <div className={styles.optionsSection}>
      <div className={styles.optionsFirstSection}>
        <div className={styles.optionSection}>
          <DataIcon />
          <p>Your data in YouTube</p>
        </div>
        <div className={styles.optionSection}>
          <ModeNightOutlinedIcon />
          <p>Appearance: Device theme</p>
          <ArrowForwardIosOutlinedIcon
            sx={{
              color: "white",
              fontSize: "medium",
              marginLeft: "10px",
            }}
          />
        </div>
        <div className={styles.optionSection} onClick={()=>setShowLanguage(showLanguage=>!showLanguage)}>
          <LanguageIcon />
          <p>Language: {}</p>
          <ArrowForwardIosOutlinedIcon
            sx={{
              color: "white",
              fontSize: "medium",
              marginLeft: "10px",
            }}
          />
        </div>
        <div className={styles.optionSection}>
          <RestrictedModeIcon />
          <p>Restricted Mode: {}</p>
          <ArrowForwardIosOutlinedIcon
            sx={{
              color: "white",
              fontSize: "medium",
              marginLeft: "10px",
            }}
          />
        </div>
     
        <div className={styles.optionSection}>
          <LocationIcon />
          <p>Location: {}</p>
          <ArrowForwardIosOutlinedIcon
            sx={{
              color: "white",
              fontSize: "medium",
              marginLeft: "10px",
            }}
          />
        </div>
        <div className={styles.optionSection}>
          <KeyboardShortcutsIcon />
          <p>Keyboard shortcuts</p>
        </div>
    
      </div>
   <div className={styles.underscore}>
         <div className={styles.optionSection }>
          <KeyboardShortcutsIcon />
          <p>Keyboard shortcuts</p>
        </div>
        </div>
         <div className={styles.optionsFirstSection}>
             <div className={styles.optionSection}>
          <HelpIcon />
          <p>Help</p>
        </div>
         <div className={styles.optionsFirstSection}>
             <div className={styles.optionSection}>
          <FeedbackIcon />
          <p>Send feedback</p>
        </div>
        
         </div>
         
         </div>
         {showLanguage&&<KeyboardShortcuts />}
    </div>
  );
};

export default SignInMoreDetails;
