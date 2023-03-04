import { Autocomplete, TextField } from "@mui/material";
import arrow from "../../assets/arrow.png";
import {
  Head,
  LiOptions,
  Stylednav,
  Stylednotifecation,
  Styledul,
} from "./style";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
export default function Header({ form }) {
  if (form) {
    return (
      <Stylednav>
        <Head>Freelance Platform</Head>
      </Stylednav>
    );
  } else {
    return (
      <Stylednav>
        <Head>Freelance Platform</Head>
        <div style={{ display: "flex", gap: "300px" }}>
          <Styledul>
            <li>
              Find Work
              <img src={arrow} alt="arrow" />
              <ul>
                <LiOptions>Saved Jobs</LiOptions>
                <LiOptions>Proposals</LiOptions>
                <LiOptions>Profile</LiOptions>
              </ul>
            </li>
            <li>
              My Jobs
              <img src={arrow} alt="arrow" />
              <ul>
                <LiOptions>My Jobs</LiOptions>
                <LiOptions>All Contracts</LiOptions>
                <LiOptions>Work Dairy</LiOptions>
              </ul>
            </li>
            <li>
              Reports
              <img src={arrow} alt="arrow" />
              <ul>
                <LiOptions>Overview</LiOptions>
                <LiOptions>My Reports</LiOptions>
                <LiOptions>Transaction History</LiOptions>
              </ul>
            </li>
            <li>Messages</li>
          </Styledul>
          <Stylednotifecation>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              // options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  sx={{ width: "300px", marginTop: "10px" }}
                  {...params}
                  label="Search Job"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
            <QuestionMarkOutlinedIcon sx={{ margin: "24px 0 0 10px" }} />
            <SendOutlinedIcon sx={{ margin: "24px 0 0 10px" }} />
            <NotificationsNoneOutlinedIcon sx={{ margin: "24px 0 0 10px" }} />
          </Stylednotifecation>
        </div>
      </Stylednav>
    );
  }
}
