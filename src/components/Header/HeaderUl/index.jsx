import React from "react";
import { LiMsg, LiOptions, StyledLink, Styledul } from "./style";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeaderUl = () => {
  
  return (
    <Styledul>
      <li>
        <p>
          <StyledLink to="/home">
          Find Work</StyledLink>
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </p>
        <ul>
          <LiOptions>Saved Jobs</LiOptions>
          <LiOptions>Proposals</LiOptions>
          <StyledLink to="/profile">
            <LiOptions>Profile</LiOptions>
          </StyledLink>
        </ul>
      </li>
      <li>
        <p>
          My Jobs
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </p>
        <ul>
          <LiOptions>My Jobs</LiOptions>
          <LiOptions>All Contracts</LiOptions>
          <LiOptions>Work Dairy</LiOptions>
        </ul>
      </li>
      <li>
        <p>
          Reports
          <KeyboardArrowDownIcon sx={{ verticalAlign: "middle" }} />
        </p>

        <ul>
          <LiOptions>Overview</LiOptions>
          <LiOptions>My Reports</LiOptions>
          <LiOptions>Transaction History</LiOptions>
        </ul>
      </li>
      <LiMsg>Messages</LiMsg>
    </Styledul>
  );
};

export default HeaderUl;
