import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Navigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  heigt: "400px",
  borderRadius: "20px",

  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const   OverViewModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newOverView, setNewOverView] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [skills, setSkills] = useState([]);
  const [img, setImg] = useState("");

  const [navigator, setNavigator] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation`
        );
        if (res) {
          setNewOverView(res.data[0].overview);
          setTitle(res.data[0].title);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setImg(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewOverView(value);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation/1`,
          {
            overview: newOverView,
            title: title,
            rate: rate,
            skills: skills,
            image: img,
          }
        );
        if (res) {
          setNavigator(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const DivIcon = styled.button`
    background-color: #fff;
    width: 15px;
    height: 15px;
    padding: 15px;
    border-radius: 50%;
    border: 1px solid #999;
    position: absolute;
    right:100px;
    top:80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  `;
  return (
    <div>
      <DivIcon onClick={handleOpen}>
        <EditIcon color="success" />
      </DivIcon>{" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Edit Your Title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Use this space to show clients you have the skills and experience
            they're looking for.
          </Typography>
          <ul>
            {" "}
            <li>Describe your strengths and skills.</li>
            <li>Highlight projects, accomplishments and education</li>
            <li>Keep it short and make sure it's error-free</li>
          </ul>
          <form onSubmit={handleUpdateTitle}>
            <textarea
              type="text"
              value={newOverView}
              onChange={handleChangeInput}
              style={{
                marginLeft: "40px",
                width: "400px",
                height: "150px",
                resize: "none",
              }}
            />
            <div style={{ width: "fit-content", marginLeft: "auto" }}>
              <Button type="submit" color="success">
                save
              </Button>{" "}
              <Button type="button" onClick={handleClose} color="error">
                cancel
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      {navigator ? <Navigate to={"/redirect"} /> : ""}
    </div>
  );
};

export default OverViewModal;
