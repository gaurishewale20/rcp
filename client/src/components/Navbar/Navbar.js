import React,{useState} from 'react';
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