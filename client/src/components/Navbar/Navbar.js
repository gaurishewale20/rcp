import React, { useState, useEffect } from "react";
//import coe_cnds_logo from "../../assets/images/coe_cnds_logo.png";
//import vjti_logo_white from "../../assets/images/vjti_logo_white.png";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "./Navbar.css";
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import vjti_logo_white from "../../assets/images/vjti_logo_white.png";

const Navbarr = () => {

    const navItems = [ {  link: "/", name: "Home"},{ link: "/signup", name: "SignUp"},{ link: "/login", name: "Login"}];
  

    const [scroll, setScroll] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    //   const scrollCheck = window.pageYOffset > 400;

    useEffect(() => {
 
        const scrollCheck = window.pageYOffset > 400;
        // console.log(scrollCheck);
        if (scrollCheck !== scroll) {
            setScroll(scrollCheck);
        }
        window.addEventListener("resize", handleResize);


    }, [])

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
      history.push('/');
      setUser(null);
    };
  

    return (

<>
            <Navbar className="navv py-3">

                <Container className="main_heading">

                  <div className="hidden_div" type="hidden" width="46.83" height="62"></div>

                    <h5 className="heading" >  
                        Railway Concession Portal
                    </h5>

                    <a href="https://vjti.ac.in/" target="_blank" className="heading_img">
                    <img
                        alt="vjti logo"
                        src={vjti_logo_white}
                        width="46.83" height="62"
                        className="vjti_img"
                    />
                    </a>

                </Container>

            </Navbar>
            { !user?.result ? (
            <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end navv2">
              <Nav className="flexcont">
                <Nav.Link eventKey="1"><Link activeClassname="active" to='/' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )} >Home</Link></Nav.Link>
                <Nav.Link eventKey="2"><Link activeClassName="active" to='/login' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Login</Link></Nav.Link>
                <Nav.Link eventKey="3"><Link activeClassName="active" to='/information' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Info</Link></Nav.Link>
                <Nav.Link eventKey="4"><Link activeClassName="active" to='/request' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Request</Link></Nav.Link>
                <Nav.Link eventKey="5"><Link activeClassName="active" to='/profile' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Profile</Link></Nav.Link>
                <Nav.Link eventKey="6"><Link activeClassName="active" to='/history' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>User History</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse> ) :(
               <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end navv2">
               <Nav className="flexcont">
                 <Nav.Link eventKey="1"><Link activeClassname="active" to='/' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )} >Home</Link></Nav.Link>
                 <Nav.Link eventKey="2"><Link activeClassName="active" to='/login' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )}>Login</Link></Nav.Link>  
               </Nav>
             </Navbar.Collapse>
            ) }
</>
    )
};

export default Navbarr;



/* import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import './Navbar.css';
import {Button } from '@material-ui/core';

import logo from '../../assets/images/logo.png';
import * as actionType from '../../constants/actionTypes';

const NavComponent = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/');
    setUser(null);
  };

  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='lg' className="navv" variant="light" >
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={logo} loading="lazy" alt='logo' className="m-1 custom-logo" /></a>
            
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
              <Nav>
                <Nav.Link ><Link activeClassname="active" to='/' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )} >Home</Link></Nav.Link>
                {user?.result ? (
                  <Nav.Link><Button className="nav-link nvlink"onClick={logout}>Logout</Button></Nav.Link>
                ):(
                  <Nav.Link><Link activeClassname="active" to='/login' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )} >Login/SignUp</Link></Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>

        </div>
      </Navbar>
    </>
  );

}

export default NavComponent;

*/