import React, { useEffect, useState } from "react";

import axios from "axios";

import { Divider } from "@mui/material";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OverViewModal from "../../components/Modals/OverViewModal";
import RateModal from "../../components/Modals/RateModal";
import SkillsModal from "../../components/Modals/SkillsModal";
import TitleModal from "../../components/Modals/TitleModal";
import NameBox from "./NameBox";
import Rightbox from "./Rightbox";

import { Styledskill } from "../../components/JobCard/ListOfSkills/style";
import {
  Box,
  Div,
  Divc,
  InfoBox,
  LeftBox,
  P,
  Portfolio,
  Skills,
  Span,
  Testimonials,
} from "./style";

import portfolio from "../../assets/portfolio.png";
import testimo from "../../assets/testimo.png";
import certifi from "../../assets/certifi.png";
import exp from "../../assets/exp.png";

import { motion as mt } from "framer-motion";
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
          `${process.env.REACT_APP_CRUDS_API_URL}/personalInformation`
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
    <mt.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Header />
      <Box>
        <NameBox />
        <p style={{ display: "none" }}>{img}</p>
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
      <Testimonials>
        <h3>Testimonials</h3>
        <Divc>
          <img src={testimo} alt="testemo" />
          <p>
            Showcasing client testimonials can strengthen your profile. (+5%)
          </p>
        </Divc>
      </Testimonials>
      <Testimonials>
        <h3>Certifications</h3>
        <Divc>
          <img src={certifi} alt="testemo" />
          <P>
            Listing your certifications can help prove your specific knowledge
            or abilities. (+10%) You can add them manually or import them from
            Credly.{" "}
          </P>
        </Divc>
      </Testimonials>{" "}
      <Testimonials>
        <h3>Other Experiences</h3>
        <Divc>
          <img src={exp} alt="testemo" />
          <p>
            Highlighting relevant experiences can boost your visibility in our
            search results. (+5%)
          </p>
        </Divc>
      </Testimonials>
      <Footer />
    </mt.div>
  );
};

export default Profile;
