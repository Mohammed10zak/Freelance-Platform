import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { RecentSearch } from "./style";

const RecentSearchValues = () => {
  const { searchValue } = useAuthContext();

  return (
    <RecentSearch>
      Recent Searches:{" "}
      {searchValue.slice(-3).map((value, index) => (
        <span key={index}> {value} </span>
      ))}
    </RecentSearch>
  );
};

export default RecentSearchValues;
