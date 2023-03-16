import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import dollar from "../../assets/dollar.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  height: "400px",
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const RateModal = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    handleSavedRateStatus(newRate);
    setOpen(true);
  };

  const handleSavedRateStatus = (value) => {
    setFee(value * (20 / 100));
    setReceive(value - value * (20 / 100));
  };

  const [newRate, setNewRate] = useState(0);

  const [fee, setFee] = useState(0);
  const [receive, setReceive] = useState(0);

  const [title, setTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [img, setImg] = useState("");

  const [skills, setSkills] = useState([]);

  const [navigator, setNavigator] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation`
        );
        if (res) {
          setNewRate(res.data[0].rate);
          setOverView(res.data[0].overview);
          setTitle(res.data[0].title);
          setSkills(res.data[0].skills);
          setImg(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "newRate") {
      setNewRate(value);
      setFee(value * (20 / 100));
      setReceive(value - value * (20 / 100));
    }
    if (id === "receive") setReceive(value);
  };

  const handleUpdateRate = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation/1`,
          {
            rate: newRate,
            overview: overView,
            title: title,
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
    margin-top: -25px;
    margin-left: 75px;

    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  `;

  const InputStyled = styled.input`
    width: 30%;
    padding: 10px 15px;
    border: 2px solid #c6cec9ed;
    border-radius: 15px;
    outline: none;

    &:focus {
      border: 2px solid green;
    }
  `;
  const P = styled.p`
    position: absolute;
    top: 4px;
    right: -20px;
  `;

  const Img = styled.img`
    position: absolute;
    right: 18px;
    top: -2px;
  `;
  const InputBox = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #dddada;
    padding-bottom: 20px;
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
            Change hourly rate
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Please note that your new hourly rate will only apply to new
            contracts. The Upwork Service Fee is 20% when you begin a contract
            with a new client. Once you bill over $500 with your client, the fee
            will be 10%.
          </Typography>

          <form onSubmit={handleUpdateRate}>
            <InputBox>
              <label htmlFor="newRate">
                Hourly Rate<div>Total amount the client will see</div>
              </label>

              <InputStyled
                type="text"
                value={newRate}
                onChange={handleChangeInput}
                id="newRate"
              />
              <P>/hr</P>
              <Img src={dollar} alt="dollar" />
            </InputBox>
            <InputBox>
              <label htmlFor="fee">20% Upwork Service Fee</label>

              <InputStyled
                type="text"
                value={fee}
                onChange={handleChangeInput}
                id="fee"
                disabled
              />
              <P>/hr</P>
              <Img src={dollar} alt="dollar" />
            </InputBox>
            <InputBox>
              <label htmlFor="newRate">
                You'll Receive
                <div>
                  The estimated amount you'll receive after service fees
                </div>
              </label>
              <InputStyled
                type="text"
                value={receive}
                onChange={handleChangeInput}
                id="receive"
              />
              <P>/hr</P>
              <Img src={dollar} alt="dollar" />
            </InputBox>
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

export default RateModal;
