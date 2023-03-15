import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Input } from "@mui/material";
import { CRUDS_API_URL } from "../../config/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 6,
  p: 5,
};

const ImgModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newImg, setNewImg] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");

  const [navigator, setNavigator] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${CRUDS_API_URL}/personalInformation`
        );
        if (res) {
          setNewImg(res.data[0].image);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setTitle(res.data[0].title);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewImg(value);
  };

  const handleUpdateImg = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          `${CRUDS_API_URL}/personalInformation/1`,
          {
            title: title,
            overview: overView,
            rate: rate,
            skills: skills,
            image: newImg,
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
    position: absolute;
    z-index: 999;
    top: 6px;
    left: -8px;
    border: 1px solid #999;
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
      </DivIcon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Account Photo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <form onSubmit={handleUpdateImg}>
            <Input
              type="text"
              value={newImg}
              onChange={handleChangeInput}
              style={{ display: "block" }}
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

export default ImgModal;
