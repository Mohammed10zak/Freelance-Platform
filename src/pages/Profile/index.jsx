import axios from "axios";
import React, { useEffect, useState } from "react";
import OverViewModal from "../../components/Modals/OverViewModal";
import RateModal from "../../components/Modals/RateModal";
import SkillsModal from "../../components/Modals/SkillsModal";
import TitleModal from "../../components/Modals/TitleModal";
import { Styledskill } from "../../components/JobCard/ListOfSkills/style";
import { Box, Div, InfoBox, LeftBox, Portfolio, Skills, Span } from "./style";
import Header from "../../components/Header";
import NameBox from "./NameBox";
import portfolio from "../../assets/portfolio.png";
import Rightbox from "./Rightbox";
import { Divider } from "@mui/material";
import Footer from "../../components/Footer";
const Profile = () => {
  const [title, setTilte] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [img, setImg] = useState("");

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/personalInformation"
        );
        if (res) {
          setTilte(res.data[0].title);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setImg(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Box>
        <NameBox />
        <p style={{display:"none"}}>{img}</p>
        <InfoBox>
          <Rightbox />
          <LeftBox>
            <Div>
              <h2>
                {title}
                <TitleModal />
              </h2>

              <h3>
                ${rate}/hr
                <RateModal />
              </h3>
            </Div>
            <OverViewModal />
            <p>{overView}</p>
            <Divider />
            <h4>Work History</h4>
            <Span>
              No work yet. Once you start getting hired on Upwork, your work
              with clients will show up here.
            </Span>
            <Divider />
            <h4>Portfolio </h4>
            <Portfolio>
              <img src={portfolio} alt="portfolio" />
              <p>
                Talent who add portfolios to their profile are more likely to
                win work. (+20%)
              </p>
            </Portfolio>
            <Divider />
            <h4>Skills</h4>
            <Skills>
              <SkillsModal />
              {skills.map((item) => (
                <Styledskill key={item.id}>{item.title}</Styledskill>
              ))}
            </Skills>
          </LeftBox>
        </InfoBox>
      </Box>
      <Footer />
    </>
  );
};

export default Profile;
