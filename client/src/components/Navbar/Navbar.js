import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';
import './Navbar.css';
import logo from '../../assets/images/logo.png';

const NavComponent = () => {

  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='lg' className="navv" variant="light" >
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={logo} loading="lazy" alt='logo' className="m-1 custom-logo" /></a>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
              <Nav>
                <Nav.Link ><Link activeClassname="active" to='/' className="nav-link nvlink" onClick={() => window.scrollTo( { top: 0, behavior: 'smooth' } )} >Home</Link></Nav.Link>

              </Nav>
            </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );

}

export default NavComponent;