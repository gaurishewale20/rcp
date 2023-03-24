import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    TextField,
    Container,
    Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { updateProfile } from "../../actions/updateProfile.js";
import makeStyles from "../styles";
import Input from "../Auth/Input";

const UpdateProfile = () => {
    const [formResult,setFormResult] = useState(JSON.parse(localStorage.getItem('profile')).result)


    useEffect(() => {
        if(formResult)
           setFormResult(formResult);
    }, [formResult])

    // console.log(formResult);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = makeStyles();

    //   const [showPassword, setShowPassword] = useState(false);
    //   const handleShowPassword = () => setShowPassword(!showPassword);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        dispatch(updateProfile(formResult._id,{...formResult}));
        history.push("/profile");
    };

    return (
        <Container component="main" maxWidth="xs" className="py-5">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <TextField name="name" required variant="outlined" label="Name" fullWidth value={formResult.name} onChange={(e) => setFormResult({ ...formResult, name: e.target.value })} />
                        <TextField name="email" required variant="outlined" label="Email" fullWidth value={formResult.email} onChange={(e) => setFormResult({ ...formResult, email: e.target.value })} />
                        <TextField name="phoneNo" required variant="outlined" label="Phone No" fullWidth value={formResult.phoneNo} onChange={(e) => setFormResult({ ...formResult, phoneNo: e.target.value })} />
                        <TextField name="gender" required variant="outlined" label="Gender" fullWidth value={formResult.gender} onChange={(e) => setFormResult({ ...formResult, gender: e.target.value })} />
                        <TextField name="dob" required variant="outlined" label="Date of Birth" fullWidth value={formResult.dob} onChange={(e) => setFormResult({ ...formResult, dob: e.target.value })} />
                        <TextField name="transportLine" required variant="outlined" label="Transport Line" fullWidth value={formResult.transportLine} onChange={(e) => setFormResult({ ...formResult, transportLine: e.target.value })} />
                        <TextField name="address" required variant="outlined" label="address" fullWidth value={formResult.address} onChange={(e) => setFormResult({ ...formResult, address: e.target.value })} />
                        <TextField name="regId" required variant="outlined" label="regId" fullWidth value={formResult.regId} onChange={(e) => setFormResult({ ...formResult, regId: e.target.value })} />
                        <TextField name="a_year" type="number" required variant="outlined" label="a_year" fullWidth value={formResult.a_year} onChange={(e) => setFormResult({ ...formResult, a_year: e.target.value })} />
                        <TextField name="sem" type="number" required variant="outlined" label="sem" fullWidth value={formResult.sem} onChange={(e) => setFormResult({ ...formResult, sem: e.target.value })} />
                        <TextField name="program" required variant="outlined" label="program" fullWidth value={formResult.program} onChange={(e) => setFormResult({ ...formResult, program: e.target.value })} />
                        <TextField name="department" required variant="outlined" label="department" fullWidth value={formResult.department} onChange={(e) => setFormResult({ ...formResult, department: e.target.value })} />
                        <TextField name="vjti_id" required variant="outlined" label="vjti_id" fullWidth value={formResult.vjti_id} onChange={(e) => setFormResult({ ...formResult, vjti_id: e.target.value })} />
                        <TextField name="aadhar_card" required variant="outlined" label="aadhar_card" fullWidth value={formResult.aadhar_card} onChange={(e) => setFormResult({ ...formResult, aadhar_card: e.target.value })} />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >update
                    </Button>
                </form>
            </Paper>
        </Container>

    );
};

export default UpdateProfile;


{/* 
                        
                       
                        
                        
                        {/* <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                            />
                            <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={handleChange}
                                type="password"
                        /> *}
                    */ }