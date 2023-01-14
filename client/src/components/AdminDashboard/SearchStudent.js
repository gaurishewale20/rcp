import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

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
      {userData?(
        <>
            <h3>Name : {userData[0].name}</h3>
            <h3>Address : {userData[0].address}</h3>
            <h3>Department : {userData[0].department}</h3>
            <h3>Email : {userData[0].email}</h3>
            <h3>Gender : {userData[0].gender}</h3>
            <h3>Phone No. : {userData[0].phoneNo}</h3>
            <h3>Program : {userData[0].program}</h3>
            <h3>Registration ID : {userData[0].regId}</h3>
            <h3>Semester : {userData[0].sem}</h3>
            <h3>Transport Line : {userData[0].transportLine}</h3>
        </>
      ):("")}
    </div>
  );
};

export default SearchStudent;
