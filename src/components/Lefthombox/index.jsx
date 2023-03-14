import React from "react";
import { Box, Info, MoreInfo, Profile } from "./style";
import ProfileSlider from "../ProfileSlider";
import { Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UploadImg from "../../pages/Profile/UploadImg";
import { StyledLink } from "../Header/HeaderUl/style";
const LeftBox = () => {
  const name = localStorage.getItem("name");

  return (
    <Box>
      <Profile>
        <UploadImg />
        <StyledLink to="/profile">

        <h2>{name}</h2>
        </StyledLink>
        <span>Front-End Development</span>
        <p>
          Profile Completeness:
          <ProfileSlider value={70} />
        </p>

        <Divider variant="fullWidth" />
        <div>39 Available Connects</div>
      </Profile>

      <Info>
        <li>
          <p>
            Availability Badge
            <span>avilable</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>

        <li>
          <p>
            Hours per week
            <span>More than 30 hrs/week</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>

        <li>
          <p>
            Profile Visibility
            <span>Public</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>

        <li>
          <p>
            Job Preference
            <span>No preference set</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>
        <Divider variant="fullWidth" />
        <li>
          <p>
            My Categories
            <span>Web development</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>
      </Info>

      <MoreInfo>
        <div>
          <p>Upwork Academy</p>{" "}
          <ArrowForwardIosIcon style={{ verticalAlign: "middle" }} />
        </div>
        <Divider variant="fullWidth" />
        <div>
          <p>Direct Contracts</p>{" "}
          <ArrowForwardIosIcon style={{ verticalAlign: "middle" }} />
        </div>
        <Divider variant="fullWidth" />
        <div>
          <p>Get Paid</p>{" "}
          <ArrowForwardIosIcon style={{ verticalAlign: "middle" }} />
        </div>
        <Divider variant="fullWidth" />
        <div>
          <p>Community & Forums </p>
          <ArrowForwardIosIcon
            style={{ verticalAlign: "middle", marginLeft: "2px" }}
          />
        </div>
        <Divider variant="fullWidth" />
        <div>
          <p>Help Center </p>
          <ArrowForwardIosIcon
            style={{ verticalAlign: "middle", marginLeft: "2px" }}
          />
        </div>
      </MoreInfo>
    </Box>
  );
};

export default LeftBox;
