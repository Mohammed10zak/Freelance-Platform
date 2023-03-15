import React from "react";

import Header from "../../components/Header";
import TimeStatus from "../../components/TimeStatus";
import JobsLiked from "../../components/JobsLiked";
import Footer from "./../../components/Footer/index";
import ScrollButton from "../../components/ScrollButton";
import LeftBox from "../../components/Lefthombox";
import Searchbox from "../../components/Searchbox";
import RecentSearchValues from "./RecentSearchValues";

import { Container } from "../../global/style";

import { motion as mt } from "framer-motion";

const Home = () => {

  return (
    <mt.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeIn" }}
  >
      <Header />
      <Container>
        <div>
          <TimeStatus />
          <Searchbox width="790px" />
         <RecentSearchValues />

          <JobsLiked />
          <ScrollButton />
        </div>
        <LeftBox /> 
      </Container>
      <Footer />
    </mt.div>
  );
};

export default Home;
