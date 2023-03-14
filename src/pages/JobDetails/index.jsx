import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";

import JobdetailsCard from "./JobdetailsCard";

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
    <>
      <Header />
      <Title>Job details</Title>
      <JobdetailsCard detail={jobdetails} />
      <Footer />
    </>
  );
};

export default JobDetails;
