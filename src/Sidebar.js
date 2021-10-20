import React from "react";
import "./SidebarRow.css";
import SidebarRow from "./SidebarRow";
import PeopleIcon from "@mui/icons-material/People";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURl} title={user.displayName} />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={InfoIcon} title="About Us" />
      <SidebarRow Icon={HelpIcon} title="Something" />
    </div>
  );
}

export default Sidebar;
