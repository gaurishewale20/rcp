import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchStudent } from "../../actions/requests";
import axios from "axios";


const SearchStudent = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const fetchStudentData = async (ID) => {
    await fetch("http://localhost:5000/user/searchStudent", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({"ID":ID}),
  });
  };

  const submitID = (e) => {
    e.preventDefault();
    dispatch(searchStudent(search));
    fetchStudentData(search);
  };

  

  return (
    <div className="container">
      <div className="container">
        <form onSubmit={submitID}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>

    </div>
  );
};

export default SearchStudent;
