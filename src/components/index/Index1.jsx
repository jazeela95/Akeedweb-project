import React, { useState } from 'react';
import "./index1.css"
import { Carousel, Button } from 'react-bootstrap';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
// import { motion } from 'framer-motion';
import backimg1 from "../../assets/images/slide1-shape3.png";
import backimg2 from "../../assets/images/slide1-shape1.png";
import backimg3 from "../../assets/images/slide1-shape2.png";
import manhome from "../../assets/images/slide1-mckp1.png";
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import logo from "../../assets/images/akeedlogo.png";
import man2 from "../../assets/images/man2.png"
import backimg4 from "../../assets/images/slide2-shape1.png"
import feat from "../../assets/images/parallax2.jpg"
import para from "../../assets/images/parallax1.jpg"
import port from "../../assets/images/port-img1-4.jpg"
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Index1 = () => {
  // show searchbar
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true); // Set showForm state to true when button is clicked
  };
  const handleClose = () => {
    setShowForm(false);
  };
  // show navbar
  const [showNavbar, setShowNavbar] = useState(false);

  const handleClicknav = () => {
    setShowNavbar(true); // Show the navigation bar when the button is clicked
  };

  const handleClosenav = () => {
    setShowNavbar(false); // Hide the navigation bar when close button is clicked
  };
// nav dropdown
const [dropdownStates, setDropdownStates] = useState({
  home: false,
  about: false,
  portfolio: false,
  pages: false,
  blog: false
});

const [dropdownHeight, setDropdownHeight] = useState(0);

const handleToggleDropdown = (dropdownName, dropdownHeight) => {
  setDropdownHeight(dropdownHeight);
  setDropdownStates(prevState => ({
    ...Object.keys(prevState).reduce((acc, key) => ({ ...acc, [key]: key === dropdownName }), {}),
  }));
};

const handleResetDropdowns = () => {
  setDropdownHeight(0);
  setDropdownStates({
    home: false,
    about: false,
    portfolio: false,
    pages: false,
    blog: false
  });
};

  return (
    <div style={{ position: "relative",overflow:"hidden" }}>
      <div style={{ display: "flex" }} className='index-top'>
            <div className='homemain-topbar-left'>
              <div className='homemain-topbar-left-logodiv'>
                <img className='homemain-topbar-left-img' src={logo} alt="" />
              </div>
            </div>
            <div className='homemain-topbar-right'>
              <div className='homemain-topbar-right-div'>
                <Button className='searchicon-homemain-button'  onClick={handleClick}>
                  <SearchIcon className='searchicon-homemain' />
                </Button>
                {showForm && ( // Render the form only when showForm state is true
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control-index"
              id="exampleInputEmail1"
              placeholder='Subscribe to our newsletter'
              aria-describedby="emailHelp"
            />
            <Button className='indexform-icon' onClick={handleClose}>
              <CloseIcon style={{color:"white"}}/>
                </Button>
          </div>
        </form>
      )}
                <Button className='navicon-homemain-button' onClick={handleClicknav}>
                  <DensityMediumIcon className='navicon-homemain' />
                </Button>
                {showNavbar && (
                <div className="mb-3">
                <div className='navbar-right' >
                
        <BootstrapNavbar expand="lg" className="navbar-body-tertiary">
          <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
          <BootstrapNavbar.Collapse id="navbarSupportedContent">
          
            <Nav className="navbar-nav indexnav flex-column">
           
             <NavDropdown 
      title={
        <div className='nav-dropdown-title'>
          <span>Home</span>
            <Button className='indexnav-button' onClick={() => handleToggleDropdown('home')}>
              {dropdownStates.home ? <RemoveIcon /> : <AddIcon />}
            </Button>
            </div>
        }
        id=""
        className='NavDropdown'
        show={dropdownStates.home}
        style={{ marginBottom: dropdownHeight }}
        onMouseLeave={handleResetDropdowns}
    >
         {dropdownStates.home && (
          <div >
              <NavDropdown.Item className='navdropdown-item' ><Link to="/services" className='custlink'>Services</Link></NavDropdown.Item>
             <NavDropdown.Item  className='navdropdown-item'><Link to="/about" className='custlink'>About</Link></NavDropdown.Item>
             <NavDropdown.Item  className='navdropdown-item'><Link to="/portfolio" className='custlink'>Portfolio</Link></NavDropdown.Item>
             <NavDropdown.Item  className='navdropdown-item'><Link to="/video" className='custlink'>Video</Link></NavDropdown.Item>
             <NavDropdown.Item className='navdropdown-item'><Link to="/blog" className='custlink'>Blog</Link></NavDropdown.Item>
             <NavDropdown.Item className='navdropdown-item'><Link to="/clientlogo" className='custlink'>Client</Link></NavDropdown.Item>
             <NavDropdown.Item  className='navdropdown-item'><Link to="/newsletter" className='custlink'>Newletter</Link></NavDropdown.Item>
             </div>
        )}
                 
                </NavDropdown>
                <NavDropdown
      title={
        <div className='nav-dropdown-title'>
          <span>About</span>
          <Button className='indexnav-button' onClick={() => handleToggleDropdown('about')}>
              {dropdownStates.about ? <RemoveIcon /> : <AddIcon />}
            </Button>
            </div>
        }
        id=""
        className='NavDropdown'
        show={dropdownStates.about}
        style={{ marginBottom: dropdownHeight }}
        onMouseLeave={handleResetDropdowns}
    >
         {dropdownStates.about && (
          <div>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
              
              </div>
        )}
        </NavDropdown>
        <NavDropdown
      title={
        <div className='nav-dropdown-title'>
          <span>Portfolio</span>
          <Button className='indexnav-button' onClick={() => handleToggleDropdown('portfolio')}>
              {dropdownStates.portfolio ? <RemoveIcon /> : <AddIcon />}
            </Button>
            </div>
        }
        id=""
        className='NavDropdown'
        show={dropdownStates.portfolio}
        style={{ marginBottom: dropdownHeight }}
        onMouseLeave={handleResetDropdowns}
    >
         {dropdownStates.portfolio && (
          <div>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
              </div>)}
              </NavDropdown>
              <NavDropdown
      title={
        <div className='nav-dropdown-title'>
          <span>Pages</span>
          <Button className='indexnav-button' onClick={() => handleToggleDropdown('pages')}>
              {dropdownStates.pages ? <RemoveIcon /> : <AddIcon />}
            </Button>
            </div>
        }
        id=""
        className='NavDropdown'
        show={dropdownStates.pages}
        style={{ marginBottom: dropdownHeight }}
        onMouseLeave={handleResetDropdowns}
    >
         {dropdownStates.pages && (
          <div>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#"className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
              </div>)}
              </NavDropdown>
              <NavDropdown
      title={
        <div className='nav-dropdown-title'>
          <span>Blog</span>
          <Button className='indexnav-button' onClick={() => handleToggleDropdown('blog')}>
              {dropdownStates.blog ? <RemoveIcon /> : <AddIcon />}
            </Button>
            </div>
        }
        id=""
        className='NavDropdown'
        show={dropdownStates.blog}
        style={{ marginBottom: dropdownHeight }}
        onMouseLeave={handleResetDropdowns}
    >
         {dropdownStates.blog && (
          <div>
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
              </div>)}
              </NavDropdown>
              <Nav.Link href="/services">Contact</Nav.Link>
              
            </Nav>
            
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
        
        </div>
        <Button className='indexform-icon' onClick={handleClosenav}>
              <CloseIcon style={{color:"black"}}/>
                </Button>
     
                </div>
                )}
              </div>
            </div>
          </div>
      <Carousel interval={35000} ride="carousel" style={{ position: "relative" }}>
        <Carousel.Item className='caroselitem1'>
          <div className='homemain-maindiv'>
            <div className='homemain-topbar-backimg2div'>
              <img src={backimg2} alt="" className='homemain-topbar-backimg2' />
            </div>
            <div className='homemain-topbar-backimg3div'>
              <img src={backimg3} alt="" className='homemain-topbar-backimg3' />
            </div>
            <div className='homemain-topbar-backimg1div'>
              <img src={backimg1} alt="" className='homemain-topbar-backimg1' />
            </div>
            <div className='homemain-topbar'>
              <div className='homemain-bottombar'>
                <div className='homemain-bottombar-left'></div>
                <div className='homemain-bottombar-right'>
                  <div >
                    <img src={manhome} alt="" className='homemain-bottombar-rightimg' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Carousel.Caption className='carosel-caption'>
            <span
              className='homemain-bottombar-left-cardhead head1'
            >
              Creative
            </span>
            <span className='homemain-bottombar-left-cardcont cardcont1'>
              Our expert team of certified professionals with extensive industry experience brings high-quality service to our clients.
            </span>
            <button className='about-right-main-button index-button index-button1'>
              View Projects
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel2'>
  <div className='homemain-maindiv'>
    
    <div className='homemain-topbar-backimg3div'>
      <img src={backimg4} alt="" className='homemain-topbar-backimg4' />
    </div>
    
    <div className='homemain-topbar'>
      <div className='homemain-bottombar'>
        <div className='homemain-bottombar-left'></div>
        <div className='homemain-bottombar-right'>
          <div>
            <img src={man2} alt="" className='curser2-img' />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Carousel.Caption className='carosel-caption'>
    <span className='homemain-bottombar-left-cardhead head2' >
      Creative your Website
    </span>
    <span className='homemain-bottombar-left-cardcont cardcont2'>
      We add creativity to your business,Good design of your website is key to creating easy navigation for
      visitors; Which increases user conversions into customers
    </span>
    <button className='about-right-main-button index-button index-button2'>
      View Projects
    </button>
  </Carousel.Caption>
</Carousel.Item>
  <Carousel.Item className='carousel3'>
  <div className='homemain-maindiv'>
    <div className='homemain-topbar'>
      <div className='homemain-bottombar'>
        <div className='homemain-bottombar-left'></div>
        <div className='homemain-bottombar-right'>
          <div>
            <img src={feat} alt="" className='curser3-img' />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Carousel.Caption className='carosel-caption '>
    <span homemain-bottombar-left-cardhead style={{zIndex:"1000"}} className='homemain-bottombar-left-cardhead head3'>
      Creative MobileApp
    </span>
    <span
      
      className='homemain-bottombar-left-cardcont cont3'
    >
      We add creativity to your business,Good design of your website is key to creating easy navigation for
      visitors; Which increases user conversions into customers
    </span>
    <button
    className='about-right-main-button index-button index-button3'
    
    >
      View Projects
    </button>
  </Carousel.Caption>
</Carousel.Item>
  <Carousel.Item className='carousel4'>
  <div className='homemain-maindiv'>
    <div className='homemain-topbar'>
      <div className='homemain-bottombar'>
        <div className='homemain-bottombar-left'></div>
        <div className='homemain-bottombar-right'>
          <div>
            <img src={para} alt="" className='curser4-img' />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Carousel.Caption className='carosel-caption '>
    <span homemain-bottombar-left-cardhead style={{zIndex:"1000"}} className='homemain-bottombar-left-cardhead head4'>
      Social Media & vedio Make
    </span>
    <span
      
      className='homemain-bottombar-left-cardcont cont4'
    >
     We specialize in creating valuable content for brands and businesses. We will make sure your message is delivered through our wealth of expertise.
    </span>
    <button
    className='about-right-main-button index-button index-button3'
    
    >
      View Projects
    </button>
  </Carousel.Caption>
</Carousel.Item>
  <Carousel.Item className='carousel5'>
  <div className='homemain-maindiv'>
    <div className='homemain-topbar'>
      <div className='homemain-bottombar'>
        <div className='homemain-bottombar-left'></div>
        <div className='homemain-bottombar-right'>
          <div>
            <img src={port} alt="" className='curser5-img' />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Carousel.Caption className='carosel-caption '>
    <span homemain-bottombar-left-cardhead style={{zIndex:"1000"}} className='homemain-bottombar-left-cardhead head5'>
      AI Technologies
    </span>
    <span
      
      className='homemain-bottombar-left-cardcont cont5'
    >
      This technology add a new way to suggest the user while searching integration of Machine Learning, voice recognition, and image recognition, etc in mobile apps takes the experience to the high level.
    </span>
    <button
    className='about-right-main-button index-button index-button3'
    style={{marginTop:"-100px"}}
    
    >
      View Projects
    </button>
  </Carousel.Caption>
</Carousel.Item>


       
      </Carousel>
    </div>
  );
}

export default Index1;
