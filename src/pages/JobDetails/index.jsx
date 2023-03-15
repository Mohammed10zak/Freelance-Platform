import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";

import JobdetailsCard from "./JobdetailsCard";

import { motion as mt } from "framer-motion";

import { Title } from "./style";

const JobDetails = () => {
  const { id } = useParams();

  const [jobdetails, setJobDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:3000/jobs/${id}`);
        if (res) {
          setJobDetails(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <mt.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Header />
      <Title>Job details</Title>
      <JobdetailsCard detail={jobdetails} />
      <Footer />
    </mt.div>
  );
};

export default JobDetails;
