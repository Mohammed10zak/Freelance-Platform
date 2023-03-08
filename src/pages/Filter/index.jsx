import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Technology from "../../components/ListOfSkills";

const Filter = () => {
  const [filterJob, setFilterJob] = useState([]);
  useEffect(() => {
    (async () => {
      const q = localStorage.getItem("search");

      try {
        const res = await axios.get(
          `http://localhost:3000/jobs?title_like=${q}`
        );

        if (res) {
          setFilterJob(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {filterJob?.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <h2>{item.hourlyRate}</h2>
          <p>{item.description}</p>
          <Technology technologiesOfItem={item?.technologies} />
        </div>
      ))}
    </>
  );
};

export default Filter;
