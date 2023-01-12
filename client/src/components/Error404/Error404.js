import React from "react";
import "./Error404.model.css";
import Error404Image from '../../assets/images/Error404.png'
import {Link} from 'react-router-dom';

const Error404 = () => {

    return (
        <div style={{minHeight: "70vh"}}>
            <img src={Error404Image} className="img-fluid mt-5 mx-auto px-5 d-block" alt="404 Page" />
            <p className=" text-center mt-5">OOPS! Webpage Doesn't Exist</p>
            <Link to="/"><p className="text-center">Go back to IEEE VJTI's Homepage</p></Link>
        </div>
    );
};

export default Error404;