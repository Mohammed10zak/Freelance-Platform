import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import { CRUDS_API_URL } from "../../config/api";

const SearchedJobs = () => {
  const [filterJob, setFilterJob] = useState([]);
  const searchValue = localStorage.getItem("search");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${CRUDS_API_URL}/jobs?title_like=${searchValue}`
        );

        if (res) {
          setFilterJob(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchValue]);

  return <JobCard Jobdetails={filterJob} />;
};

export default SearchedJobs;
