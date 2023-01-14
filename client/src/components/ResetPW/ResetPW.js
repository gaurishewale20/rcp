import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, Box } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { resetpw } from '../../actions/forgot';
import { FORGOT } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

const ResetPW = () => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
          dispatch(resetpw(form, history));
      };

    const query = useQuery();
    const token = query.get('token') || null;
    console.log(token);

    form.token = token;



    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  
  return (
    <div class="p-5">
    <p class="p-3">
        Enter your new password.
    </p>
    <form class="p-3" onSubmit={handleSubmit}>
          <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
            {/* <input type="hidden" id="token" name="token" value={token}></input> */}
        <Button type="submit" fullWidth variant="contained" color="primary">
            Change Password         </Button>
    </form>
    </div>
  );
};

export default ResetPW;