import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useJobContext } from "../../../context/jobContext";

const SaveJobBtn = ({ detail }) => {
  const { state, addToSaved, removeFromSaved } = useJobContext();
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(state.jobs));
    localStorage.setItem("count", state.count);
  }, [state.jobs, state.count]);

  const handleToggleSaved = (detail) => {
    const isSaved = state.jobs.find((item) => item.id === detail.id);
    isSaved ? removeFromSaved(detail.id) : addToSaved(detail);
  };
  return (
    <Button
      onClick={() => handleToggleSaved(detail)}
      variant="outlined"
      color="success"
      style={{ borderRadius: "20px", width: "200px" }}
    >
      {state.jobs.find((item) => item.id === detail.id) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 14 14"
          role="img"
          width="20px"
        >
          <path
            fill-rule="evenodd"
            d="M7 3.646C7 1.632 5.433 0 3.5 0S0 1.632 0 3.646c0 .813.256 1.566.689 2.172L7 14l6.311-8.182A3.73 3.73 0 0014 3.646C14 1.632 12.433 0 10.5 0S7 1.632 7 3.646"
            fill="green"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 14 14"
          role="img"
          width="20px"
        >
          <path
            fill-rule="evenodd"
            d="M3.938 1.683c-1.206 0-2.188.999-2.188 2.227 0 .487.153.95.441 1.339l4.81 5.996 4.829-6.021c.268-.364.421-.827.421-1.314 0-1.228-.982-2.227-2.188-2.227-1.206 0-2.187.999-2.187 2.227h-1.75c0-1.228-.982-2.227-2.188-2.227zM7.001 14L.785 6.252A3.888 3.888 0 010 3.91C0 1.754 1.767 0 3.938 0c1.236 0 2.34.568 3.063 1.455A3.94 3.94 0 0110.063 0c2.171 0 3.938 1.754 3.938 3.91 0 .839-.265 1.641-.766 2.316L7.001 14z"
          ></path>
        </svg>
      )}
      <span style={{ marginLeft: "10px" }}>Save Job</span>
    </Button>
  );
};

export default SaveJobBtn;
