import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import "./styless.css";

const SearchStudent = () => {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState("");
  // const dispatch = useDispatch();

  const fetchStudentData = async (ID) => {
    const { data } = await axios.get(
      "http://localhost:5000/user/searchStudent/:id",
      {
        params: {
          id: ID,
        },
      }
    );
    // console.log(data);
    setUserData(data);
  };
  // console.log(userData);
  const submitID = (e) => {
    e.preventDefault();
    // dispatch(searchStudent(search));
    fetchStudentData(search);
  };

  return (
    <div className="container">
      <div className="container">
        <form onSubmit={submitID} className="search_form text-center">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)
            }
            className="search_field"
          />
          <button type="submit" className="sub2">
            <SearchIcon />
          </button>
        </form>
      </div>
      {userData?(
        <div className="user_info text-center">
            <h4>Name : {userData[0].name}</h4>
            <h4>Address : {userData[0].address}</h4>
            <h4>Department : {userData[0].department}</h4>
            <h4>Email : {userData[0].email}</h4>
            <h4>Gender : {userData[0].gender}</h4>
            <h4>Phone No. : {userData[0].phoneNo}</h4>
            <h4>Program : {userData[0].program}</h4>
            <h4>Registration ID : {userData[0].regId}</h4>
            <h4>Semester : {userData[0].sem}</h4>
            <h4>Transport Line : {userData[0].transportLine}</h4>
        </div>
      ):("")}
    </div>
  );
};

export default SearchStudent;
