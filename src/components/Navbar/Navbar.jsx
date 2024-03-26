// Navbar.jsx

import React, { useEffect, useState } from 'react';
import "./navbar.css"
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/images/akeedlogo.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowNavbar(scrollTop > 100); // Adjust 100 to the desired scroll position to show the navbar
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [showaboutDropdown, setShowaboutDropdown] = useState(false);
  const handleaboutMouseEnter = () => {
    setShowaboutDropdown(true);
  };

  const handleaboutMouseLeave = () => {
    setShowaboutDropdown(false);
  };
  const [showblogDropdown, setShowblogDropdown] = useState(false);
  const handleblogMouseEnter = () => {
    setShowblogDropdown(true);
  };

  const handleblogMouseLeave = () => {
    setShowblogDropdown(false);
  };
  const [showpagesDropdown, setShowpagesDropdown] = useState(false);
  const handlepagesMouseEnter = () => {
    setShowpagesDropdown(true);
  };

  const handlepagesMouseLeave = () => {
    setShowpagesDropdown(false);
  };
  const [showportDropdown, setShowportDropdown] = useState(false);
  const handleportMouseEnter = () => {
    setShowportDropdown(true);
  };

  const handleportMouseLeave = () => {
    setShowportDropdown(false);
  };
  const [showhomeDropdown, setShowhomeDropdown] = useState(false);
  const handlehomeMouseEnter = () => {
    setShowhomeDropdown(true);
  };

  const handlehomeMouseLeave = () => {
    setShowhomeDropdown(false);
  };
 
  return (
    <div className={`navbar-container ${showNavbar ? 'show' : ''}`}>
      <div className='navbar-left'>
       <Link to="/"> <img src={logo} alt="" className='homemain-topbar-left-img navimg'/></Link>
        {/* <span>FOR ALL TECHNOLOGY & BUSINESS SOLUTION</span> */}
      </div>
      <div className='navbar-right'>
        <BootstrapNavbar expand="lg" className="navbar-body-tertiary">
          <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
          <BootstrapNavbar.Collapse id="navbarSupportedContent">
            <Nav className="navbar-nav">
              <NavDropdown title="Home" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showhomeDropdown}
                onMouseEnter={handlehomeMouseEnter}
                onMouseLeave={handlehomeMouseLeave}>
               
                  <NavDropdown.Item className='navdropdown-item'><Link to="/services" className='custlink'>Services</Link></NavDropdown.Item>
                <NavDropdown.Item  className='navdropdown-item'><Link to="/about" className='custlink'>About</Link></NavDropdown.Item>
                <NavDropdown.Item  className='navdropdown-item'><Link to="/portfolio" className='custlink'>Portfolio</Link></NavDropdown.Item>
                <NavDropdown.Item  className='navdropdown-item'><Link to="/video" className='custlink'>Video</Link></NavDropdown.Item>
                <NavDropdown.Item className='navdropdown-item'><Link to="/blog" className='custlink'>Blog</Link></NavDropdown.Item>
                <NavDropdown.Item className='navdropdown-item'><Link to="/clientlogo" className='custlink'>Client</Link></NavDropdown.Item>
                <NavDropdown.Item  className='navdropdown-item'><Link to="/newsletter" className='custlink'>Newletter</Link></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showaboutDropdown}
                onMouseEnter={handleaboutMouseEnter}
                onMouseLeave={handleaboutMouseLeave}>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Portfolio" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showportDropdown}
                onMouseEnter={handleportMouseEnter}
                onMouseLeave={handleportMouseLeave}>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showpagesDropdown}
                onMouseEnter={handlepagesMouseEnter}
                onMouseLeave={handlepagesMouseLeave}>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#"className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showblogDropdown}
                onMouseEnter={handleblogMouseEnter}
                onMouseLeave={handleblogMouseLeave}>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/services">Contact</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </div>
    </div>
  )
}

export default Navbar;
