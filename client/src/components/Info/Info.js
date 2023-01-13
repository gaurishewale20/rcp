 import React,{useState} from "react";
 import "./Info.css";
 import vjti_photo from '../../assets/images/vjti_photo.jpg';
 
 const Info = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (

    <>

    <div class="p-5">
      <h3>
      Steps to create request:</h3>
      <ol class="p-2" type = "1">
        <li>Login (Sign up if account hasn't been created)</li>
        <li>Go to Request.</li>
        <li>Add your previous pass details and your current (to be created) pass details.</li>
        <li>A staff member will approve your request (you will be notified via email).</li>
        <li>After being approved, you may visit the VJTI Railway Concession Office for final verification of documents.</li>
        <li>A document/sheet will be given to you which has to be taken to your Railway station while making the ticket.</li>
      </ol>
    </div>

    </>
  );
};

export default Info;