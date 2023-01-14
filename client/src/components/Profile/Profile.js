import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation, useHistory } from 'react-router-dom';


const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState("");
    
    const fetchProfileData = async (id) =>{
    console.log("in fetch");
    const {data} =  await axios.get(
        "http://localhost:5000/user/searchProfile/:id",{
          params:{
            id:id,
          },
        }
      );
    console.log("in profile page admin", data);
    setUserData(data);
}

    // useEffect(() => {
    //    fetchProfileData(id);
    // }, []);

    const submitID = (e) => {
      e.preventDefault();
      fetchProfileData(id);
    };
  

  return (
    <div>
      <div className='container'>Profile- {id}</div>
      <div className="container">
        <form onSubmit={submitID} className="search_form text-center">
          <button type="submit" className="sub2">
            Go!
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


  )
}

export default Profile;
