import React, { useEffect, useState } from "react";

import { Autocomplete, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { useAuthContext } from "../../context/AuthContext";

import { Iconsearch, Search } from "./style";

const Searchbox = ({ width }) => {
  const [allJobs, setAllJobs] = useState([]);

  const [search, setSearch] = useState("");

  const { searchValue, setSearchValue } = useAuthContext();

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
    const searched = [...searchValue, search];
    setSearchValue((prevState) => [...prevState, search]);
    localStorage.setItem("searchValues", JSON.stringify(searched));
    navigate("/redirectfilter")
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
          placeholder="Search For Job"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                padding: "0",
                border: "none",
                width: width,
              },

              "& .MuiOutlinedInput-root:active": {
                border: "none",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #e4ebe4",
                width: width,
              },
            }}
            {...params}
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
          sx={{ width: "20px", margin: "5px auto", color: "white" }}
        />
      </Iconsearch>
    </Search>
  );
};

export default Searchbox;
