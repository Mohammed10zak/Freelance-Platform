import React from "react";

import { Container } from "../../global/style";

import Header from "../../components/Header";
import TimeStatus from "../../components/TimeStatus";
import Searchbox from "../../components/Searchbox";
import JobsLiked from "../../components/JobsLiked";
import Footer from './../../components/Footer/index';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <TimeStatus />
        <Searchbox width="775px"/>
        <JobsLiked />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
