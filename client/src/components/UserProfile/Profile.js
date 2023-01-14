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
    <Container component="main" maxWidth="xs">
      <Button onClick={editProfile}>Edit Profile</Button>
      <div className="container">
       <h5>Name: {form.name}</h5>
        <h5>Email: {form.email}</h5>
        <h5>Phone No.: {form.phoneNo}</h5>
        <h5>Gender: {form.gender}</h5>
        <h5>Date Of Birth: {form.dob}</h5>
        <h5>Transport Line {form.transportLine}</h5>
        <h5>Address: {form.address}</h5>
        <h5>Registration Id: {form.regId}</h5>
        <h5>Academic Year: {form.a_year}</h5>
        <h5>Semester: {form.sem}</h5>
        <h5>Program: {form.program}</h5>
        <h5>Department: {form.department}</h5>
        <h5>VJTI ID Card Link: {form.vjti_id}</h5>
        <h5>Aadhar Card Link: {form.aadhar_card}</h5>


        {/* Write details sequencially */}

      </div>
        </Container>

  );
};

export default Profile;