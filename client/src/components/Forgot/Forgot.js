import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { forgot } from '../../actions/forgot';
import { FORGOT } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Forgot = () => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
          dispatch(forgot(form, history));
      };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  return (
    <div class="p-5">
    <p class="p-3">
        Enter your email ID to send a reset password request.
    </p>
    <form class="p-3" onSubmit={handleSubmit}>
        <Input class="mb-2" name="email" label="E-mail ID"  handleChange={handleChange} autoFocus half />
        <Button type="submit" variant="contained" color="primary">
            Send Email
          </Button>
    </form>
    </div>
  );
};

export default Forgot;