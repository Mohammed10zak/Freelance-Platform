import { Button } from "@mui/material";
import React from "react";
import ImgModal from "../../components/Modals/ImgModal";
import { Span } from "../JobDetails/JobdetailsCard/style";
import { AccountIMg, Name } from "./style";
import UploadImg from "./UploadImg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const NameBox = () => {
  const name = localStorage.getItem("name");
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();

  let amPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  return (
    <Name>
      <AccountIMg>
        <UploadImg />
      </AccountIMg>
      <ImgModal />
      <div>
        <h2>{name}</h2>
        <Span>
          <LocationOnIcon
            sx={{ fontSize: 20 }}
            color="disabled"
            style={{ verticalAlign: "sub" }}
          />
          Gaza, Palestinian Territories - {hours}:{minutes} {amPm} local time
        </Span>
      </div>

      <div>
        <Button
          variant="outlined"
          color="success"
          style={{ borderRadius: "30px", width: "200px", marginBottom: "10px" }}
        >
          See public view
        </Button>{" "}
        <Button
          variant="contained"
          color="success"
          style={{ borderRadius: "30px", width: "200px" }}
        >
          {" "}
          Profile Setting
        </Button>
      </div>
    </Name>
  );
};

export default NameBox;
