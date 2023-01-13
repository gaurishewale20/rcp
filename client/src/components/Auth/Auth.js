import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Icon from "./icon";
import { signin, signup } from "../../actions/auth";
import { AUTH } from "../../constants/actionTypes";
import useStyles from "./styles";
import Input from "./Input";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  gender: "",
  dob: "",
  transportLine: "",
  address: "",
  regId: "",
  a_year: "",
  sem: "",
  program: "",
  department: "",
  vjti_id: "",
  aadhar_card: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
    history.push("/");
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            {isSignup && (
              <Input
                name="phoneNo"
                label="Phone Number"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input name="gender" label="Gender" handleChange={handleChange} />
            )}
            {isSignup && (
              <Input
                name="dob"
                label="Date Of Birth"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input
                name="transportLine"
                label="Transport Line"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input
                name="address"
                label="Address"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input
                name="regId"
                label="Registration ID"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input
                name="a_year"
                label="Academic Year"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input name="sem" label="Semester" handleChange={handleChange} />
            )}
            {isSignup && (
              <Input
                name="program"
                label="Program"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input
                name="department"
                label="Department"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input
                name="vjti_id"
                label="VJTI ID Drive URL"
                // type="file"
                handleChange={handleChange}
              />
            )}
            {isSignup && (
              <Input
                name="aadhar_card"
                label="Aadhar Card Drive URL"
                // type="file"
                handleChange={handleChange}
              />
            )}
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="center">
            <Grid item textAlign="center">
              <Button
                className={classes.makeAccount}
                onClick={switchMode}
                fullWidth
              >
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
