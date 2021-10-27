//import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import "./Story.css";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: "url(${image})" }} classname="story">
      <h4>{title}</h4>
    </div>
  );
}

export default Story;

// Should be inside the div<PersonIcon src={profileSrc} />
