import React from "react";
import "./SidebarRow.css";
import { AccountCircleIcon } from "@mui/icons-material/AccountCircle";

function Sidebar({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <AccountCircleIcon src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default Sidebar;
