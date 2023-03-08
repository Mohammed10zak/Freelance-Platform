import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Iconsearch, Search } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Searchbox = ({ width }) => {
  const [search, setSearch] = useState("");
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:3000/jobs`);

        if (res) {
          setAllJobs(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/filter");
    localStorage.setItem("search", search);
  };

  return (
    <Search width={width} onSubmit={handleSubmit}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allJobs.map((job) => job.title)}
        renderInput={(params) => (
          <TextField
            sx={{ width: width, marginTop: "6px" }}
            {...params}
            label="Search for Job..."
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Iconsearch>
        <SearchIcon
          sx={{ width: "40px", margin: "15px auto", color: "white" }}
        />
      </Iconsearch>
    </Search>
  );
};

export default Searchbox;
