// Navbar.jsx

import React, { useEffect, useState } from 'react';
import "./navbar.css"
import { Navbar as BootstrapNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../assets/images/akeedlogo.png";
import { Link} from 'react-router-dom';
const Navbar = () => {
  
  // const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const [showhomeDropdown, setShowhomeDropdown] = useState(false);
  const [showaboutDropdown, setShowaboutDropdown] = useState(false);
  const [showportDropdown, setShowportDropdown] = useState(false);
  const [showpagesDropdown, setShowpagesDropdown] = useState(false);
  const [showblogDropdown, setShowblogDropdown] = useState(false);

  const handleDropdownEnter = (dropdownSetter) => {
    // Close all other dropdowns
    setShowhomeDropdown(false);
    setShowaboutDropdown(false);
    setShowportDropdown(false);
    setShowpagesDropdown(false);
    setShowblogDropdown(false);
    
    // Open the specified dropdown
    dropdownSetter(true);
  };

  const handleDropdownLeave = () => {
    // Close all dropdowns
    setShowhomeDropdown(false);
    setShowaboutDropdown(false);
    setShowportDropdown(false);
    setShowpagesDropdown(false);
    setShowblogDropdown(false);
  };

 
  return (
    <Container>
    <div className={`navbar-container ${scrolled ? 'show' : ''}`}>
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
                onMouseEnter={() => handleDropdownEnter(setShowhomeDropdown)}
           onMouseLeave={handleDropdownLeave}
                >
               <div className='nav-dropdown-items'>
                  <NavDropdown.Item className='navdropdown-item'><Link to="/services" className='custlink'>Services</Link></NavDropdown.Item>
                <NavDropdown.Item  className='navdropdown-item'><Link to="/about" className='custlink'>About</Link></NavDropdown.Item>
                <NavDropdown.Item  className='navdropdown-item'><Link to="/portfolio" className='custlink'>Portfolio</Link></NavDropdown.Item>
                <NavDropdown.Item  className='navdropdown-item'><Link to="/video" className='custlink'>Video</Link></NavDropdown.Item>
                <NavDropdown.Item className='navdropdown-item'><Link to="/blog" className='custlink'>Blog</Link></NavDropdown.Item>
                <NavDropdown.Item className='navdropdown-item'><Link to="/clientlogo" className='custlink'>Client</Link></NavDropdown.Item>
                <NavDropdown.Item  className='navdropdown-item'><Link to="/newsletter" className='custlink'>Newletter</Link></NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown title="About" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showaboutDropdown}
                onMouseEnter={() => handleDropdownEnter(setShowaboutDropdown)}
                onMouseLeave={handleDropdownLeave}>
                  <div className='nav-dropdown-items'>
                <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/digitalmarketing" className='custlink'>Digital Marketing</Link></NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/webdesign" className='custlink'>Web Design</Link></NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/mobileapp" className='custlink'>Mobile App</Link></NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/ai-technology" className='custlink'>AI-Technology</Link></NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/video-product" className='custlink'>Video-Prduction</Link></NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/brandDesign" className='custlink'>Brand-Designing</Link></NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown title="Portfolio" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showportDropdown}
                onMouseEnter={() => handleDropdownEnter(setShowportDropdown)}
                onMouseLeave={handleDropdownLeave}
                >
                  <div className='nav-dropdown-items'>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown title="Pages" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showpagesDropdown}
                onMouseEnter={() => handleDropdownEnter(setShowpagesDropdown)}
                onMouseLeave={handleDropdownLeave}
              >
                  <div className='nav-dropdown-items'  >
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#"className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
                </div>
              </NavDropdown>
              <NavDropdown title="Blog" 
                id="projects-dropdown" 
                className='NavDropdown' 
                show={showblogDropdown}
                onMouseEnter={() => handleDropdownEnter(setShowblogDropdown)}
                onMouseLeave={handleDropdownLeave}>
                  <div className='nav-dropdown-items'   >
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link href="/"><Link to="/contactus" className='custlinkcontact'>Contact</Link></Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </div>
     
    </div>
    </Container>
  )
}

export default Navbar;
