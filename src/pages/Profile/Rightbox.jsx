import React from 'react'
import { RightBox, Span } from './style'
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const Rightbox = () => {
  return (
    <RightBox>
    <h3>
      Video introduction
      <AddCircleOutlineSharpIcon
        color="success"
        sx={{ fontSize: 30 }}
        style={{ verticalAlign: "middle", marginRight: "10px" }}
      />
    </h3>
    <h3>
      Hours per week
      <EditIcon
        color="success"
        style={{ verticalAlign: "middle", marginLeft: "10px" }}
      />
    </h3>

    <Span>More than 30 hrs/week</Span>
    <Span>No contract-to-hire preference set</Span>
    <h3>
      Languages{" "}
      <AddCircleOutlineSharpIcon
        color="success"
        sx={{ fontSize: 30 }}
        style={{ verticalAlign: "middle", marginRight: "10px" }}
      />
      <EditIcon
        color="success"
        style={{ verticalAlign: "middle", marginLeft: "10px" }}
      />
    </h3>
    <Span>English: Conversational</Span>
    <Span>Arabic: Conversational</Span>

    <h3>Verifications</h3>
    <Span>
      Military Veteran{" "}
      <AddCircleOutlineSharpIcon
        color="success"
        sx={{ fontSize: 30 }}
        style={{ verticalAlign: "middle", marginRight: "10px" }}
      />
    </Span>
    <h3>
      Education{" "}
      <AddCircleOutlineSharpIcon
        color="success"
        sx={{ fontSize: 30 }}
        style={{ verticalAlign: "middle", marginRight: "10px" }}
      />
    </h3>
  </RightBox>  )
}

export default Rightbox