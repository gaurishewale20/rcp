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
    <div>
    <p>
        something is here
    </p>
    <form onSubmit={handleSubmit}>
        <Input name="email" label="E-mail ID"  handleChange={handleChange} autoFocus half />
        <Button type="submit" fullWidth variant="contained" color="primary">
            Send Email
          </Button>
    </form>
    </div>
  );
};

export default Forgot;