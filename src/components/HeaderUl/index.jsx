import React from "react";
import { LiMsg, LiOptions, Styledul } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const HeaderUl = () => {
  return (
    <Styledul>
      <li>
        <li>
          Find Work
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </li>
        <ul>
          <LiOptions>Saved Jobs</LiOptions>
          <LiOptions>Proposals</LiOptions>
          <LiOptions>Profile</LiOptions>
        </ul>
      </li>
      <li>
        <li>
          My Jobs
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </li>
        <ul>
          <LiOptions>My Jobs</LiOptions>
          <LiOptions>All Contracts</LiOptions>
          <LiOptions>Work Dairy</LiOptions>
        </ul>
      </li>
      <li>
        <li>
          Reports
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </li>

        <ul>
          <LiOptions>Overview</LiOptions>
          <LiOptions>My Reports</LiOptions>
          <LiOptions>Transaction History</LiOptions>
        </ul>
      </li>
      <LiMsg> 
        Messages</LiMsg>
    </Styledul>
  );
};

export default HeaderUl;
