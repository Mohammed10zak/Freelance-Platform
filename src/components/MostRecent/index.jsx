import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";

const MostRecent = () => {
  const [mostJob, setMostJob] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/jobs?_sort=id&_order=desc"
        );
        if (res) {
          setMostJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <p>
        Browse the most recent jobs that match your skills and profile
        description to the skills clients are looking for.
      </p>

      <JobCard Jobdetails={mostJob} />
    </>
  );
};

export default MostRecent;
