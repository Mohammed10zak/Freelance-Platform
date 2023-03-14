import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
const Stars = ({ filled }) => {
  if (filled) {
    return (
      <>
        <StarIcon
          sx={{ color: "green", width: "20px", verticalAlign: "middle" }}
        />
        <StarIcon
          sx={{ color: "green", width: "20px", verticalAlign: "middle" }}
        />
        <StarIcon
          sx={{ color: "green", width: "20px", verticalAlign: "middle" }}
        />
        <StarIcon
          sx={{ color: "green", width: "20px", verticalAlign: "middle" }}
        />
        <StarIcon
          sx={{ color: "green", width: "20px", verticalAlign: "middle" }}
        />
      </>
    );
  } else {
    return (
      <>
        <StarBorderOutlinedIcon
          sx={{ color: "grey", width: "20px", verticalAlign: "middle" }}
        />
        <StarBorderOutlinedIcon
          sx={{ color: "grey", width: "20px", verticalAlign: "middle" }}
        />
        <StarBorderOutlinedIcon
          sx={{ color: "grey", width: "20px", verticalAlign: "middle" }}
        />
        <StarBorderOutlinedIcon
          sx={{ color: "grey", width: "20px", verticalAlign: "middle" }}
        />
        <StarBorderOutlinedIcon
          sx={{ color: "grey", width: "20px", verticalAlign: "middle" }}
        />
      </>
    );
  }
};

export default Stars;
