import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation, useHistory } from 'react-router-dom';


const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState("");

    const fetchProfileData = async (id) =>{
    console.log("in fetch");
    const {data} =  await axios.get(
        `http://localhost:5000/user/searchProfile/${id}`
      );
    console.log("in profile page admin", data);
    setUserData(data);
}

    useEffect(() => {
       fetchProfileData(id);
    }, []);

  return (
    <div className='container'>
      <div className="container-fluid">

      {userData?(
        <div className="user_info text-center py-2">
          <h3>Profile For - {id}</h3>
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
            <h3>Aadhar Link: <a href={userData[0].aadhar_card} target='_blank'>Link</a></h3>
            <h3>VJTI ID: <a href={userData[0].vjti_id} target='._blank'>Link</a></h3>
        </div>
      ):("")}
      </div>
    </div>


  )
}

export default Profile;
