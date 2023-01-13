import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>

            <Typography variant="caption" gutterbottom>
                Copyright ©Sixth Sense 2023
            </Typography>
        </div>
    );

};

export default Footer;
