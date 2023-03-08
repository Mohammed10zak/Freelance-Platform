import React, { useEffect } from "react";
import Technology from "../ListOfSkills";
import { useJobContext } from "./../../context/jobContext";
import { Cardjob, JobDescription, Jobdetail, JobTitle } from "./style";

const JobCard = ({ Jobdetails }) => {
  const { state, addToSaved, removeFromSaved } = useJobContext();

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(state.jobs));
    localStorage.setItem("count", state.count);
  }, [state.jobs, state.count]);

  const handleToggleSaved = (detail) => {
    if (state.jobs.find((item) => item.id === detail.id)) {
      removeFromSaved(detail.id);
    } else {
      addToSaved(detail);
    }
  };
  return (
    <>
      {Jobdetails?.map((detail) => (
        <Cardjob key={detail.id}>
          <JobTitle>{detail.title}</JobTitle>
          <Jobdetail>
            {detail.hourlyRate} - {detail.expertiseLevel} - Est.
            {detail.estimatedTime},{detail.hoursPerWeek} - Budget:
            {detail.budget} - Posted in:{detail.posted}
          </Jobdetail>
          <JobDescription>{detail.description}</JobDescription>
          <Technology technologiesOfItem={detail?.technologies} />

          <p>Proposals: {detail.proposals}</p>
          <div>
            {detail.amountSpent} spent {detail.location}
          </div>
          <button onClick={() => handleToggleSaved(detail)}>saved</button>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img" width="20px"><path fill-rule="evenodd" d="M3.938 1.683c-1.206 0-2.188.999-2.188 2.227 0 .487.153.95.441 1.339l4.81 5.996 4.829-6.021c.268-.364.421-.827.421-1.314 0-1.228-.982-2.227-2.188-2.227-1.206 0-2.187.999-2.187 2.227h-1.75c0-1.228-.982-2.227-2.188-2.227zM7.001 14L.785 6.252A3.888 3.888 0 010 3.91C0 1.754 1.767 0 3.938 0c1.236 0 2.34.568 3.063 1.455A3.94 3.94 0 0110.063 0c2.171 0 3.938 1.754 3.938 3.91 0 .839-.265 1.641-.766 2.316L7.001 14z"></path></svg>
        </Cardjob>
      ))}
    </>
  );
};

export default JobCard;
