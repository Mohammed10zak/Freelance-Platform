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


const Home = () => {

  return (
    <>
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
    </>
  );
};

export default Home;
