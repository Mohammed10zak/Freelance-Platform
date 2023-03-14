import React, { useState, useEffect } from "react";

import axios from "axios";

import styled from "styled-components";
import { Divider } from "@mui/material";

import { useAuthContext } from "../../context/AuthContext";

import JobCard from "../JobCard";
import Loading from "./../Loading/index";

function JobDetails() {
  const [job, setJob] = useState([]);
  const { loading } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:3000/jobs`);
        if (res) {
          setJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <Text>
        Browse jobs that match your experience to a client's hiring preferences.
        Ordered by most relevant.
      </Text>
      {loading ? <Loading /> : <JobCard Jobdetails={job} />}

      <Divider variant="fullWidth" />
    </>
  );
}

export const Text = styled.p`
  font-size: 14px;
  color: #001e00;
  margin-bottom: 20px;
`;

export default JobDetails;
