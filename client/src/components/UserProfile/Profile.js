import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Container,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Icon from "../Auth/icon";
import { updateProfile } from "../../actions/updateProfile.js";
import makeStyles from "../styles";
import "./Profile.css";

const Profile = () => {
const formResult= JSON.parse(localStorage.getItem('profile'))
  const [form, setForm] = useState(formResult.result);
//   
  //currentState = form;

  useEffect(async ()=> {
    setForm(form);
  }, [])

  console.log(form);
  const history = useHistory();
  const classes = makeStyles();

  const editProfile=()=>{
      history.push('/updateprofile');
  }

  return (
    <Container component="main">
      {/* <Button onClick={editProfile} className="text-center">Edit Profile</Button> */}
      <button type="submit" className="sub sub_new text-center" onClick={editProfile}>Edit Profile</button>
      <div className="container user_info text-center">
       <h4>Name: {form.name}</h4>
        <h4>Email: {form.email}</h4>
        <h4>Phone No.: {form.phoneNo}</h4>
        <h4>Gender: {form.gender}</h4>
        <h4>Date Of Birth: {form.dob}</h4>
        <h4>Transport Line {form.transportLine}</h4>
        <h4>Address: {form.address}</h4>
        <h4>Registration Id: {form.regId}</h4>
        <h4>Academic Year: {form.a_year}</h4>
        <h4>Semester: {form.sem}</h4>
        <h4>Program: {form.program}</h4>
        <h4>Department: {form.department}</h4>
        <h4>VJTI ID Card Link: {form.vjti_id}</h4>
        <h4>Aadhar Card Link: {form.aadhar_card}</h4>


        {/* Write details sequencially */}

      </div>
        </Container>

  );
};

export default Profile;