import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../JobCard";

function JobDetails() {
  const [job, setJob] = useState([]);
  const [count, setCount] = useState(3);
  const handleLoadJobs = () => {
    setCount(prevCount => prevCount + 3);
  };


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:3000/jobs?_page=1&_limit=${count}`);
        if (res) {
          setJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [count]);

  return (
    <>
    <p>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.
</p>


      <JobCard Jobdetails={job} />
      <button onClick={handleLoadJobs}>load more</button>
    </>
  );
}

export default JobDetails;
