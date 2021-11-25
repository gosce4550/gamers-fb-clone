import React from "react";
import "./SidebarRow.css";
import SidebarRow from "./SidebarRow";
import PeopleIcon from "@mui/icons-material/People";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <nav className="sidebar">
      <ul className="nav-links">
        <li>
          <SidebarRow src={user.photoURl} title={user.displayName} />{" "}
        </li>
        <li>
          <SidebarRow Icon={PeopleIcon} title="Friends" />
        </li>
        <li>
          <SidebarRow Icon={InfoIcon} title="About us ">
            About
          </SidebarRow>
        </li>
        <li>
          <SidebarRow Icon={HelpIcon} title="Something" />
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
