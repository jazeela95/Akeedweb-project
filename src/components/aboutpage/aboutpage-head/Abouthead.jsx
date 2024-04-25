  import React, { useState } from 'react'
  import "./abouthead.css"
  import {  Table } from 'react-bootstrap';
  import {  Button } from 'react-bootstrap';
  import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
  import SearchIcon from '@mui/icons-material/Search';
  import DensityMediumIcon from '@mui/icons-material/DensityMedium';
  import logo from "../../../assets/images/akeedlogo.png";
  import CloseIcon from '@mui/icons-material/Close';
  import { Link } from 'react-router-dom';
  import AddIcon from '@mui/icons-material/Add';
  import RemoveIcon from '@mui/icons-material/Remove';
  import abouthead from "../../../assets/images/pattern4.jpg";
  import robo1 from "../../../assets/images/robo.jpg";
  import robo2 from "../../../assets/images/robo11.jpg";
  import CottageIcon from '@mui/icons-material/Cottage';
  import ArrowRightIcon from '@mui/icons-material/ArrowRight';
  import port from "../../../assets/images/port-img1-4.jpg"

  const Abouthead = () => {
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
      
          <div style={{ position: "relative",overflow:"hidden" }} className='index-main-bar aboutpage'>
        <div style={{ display: "flex" }} className='aboutheadtop'>
              <div className='homemain-topbar-left'>
                <div className='homemain-topbar-left-logodiv'>
                <Link to="/"> <img className='homemain-topbar-left-img' style={{cursor:"pointer"}} src={logo} alt="" /></Link>
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
                  <div className="mb-3 mb4">
                  <div className='navbar-right' >
                  
          <BootstrapNavbar expand="lg" className="navbar-body-tertiary">
            <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
            <BootstrapNavbar.Collapse id="navbarSupportedContent">
            
              <Nav className="navbar-nav indexnav flex-column ">
            
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
            <div className='nav-dropdown-items'>
            <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/digitalmarketing" className='custlink'>Digital Marketing</Link></NavDropdown.Item>
            <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/webdesign" className='custlink'>Web Design</Link></NavDropdown.Item>
            <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/mobileapp" className='custlink'>Mobile App</Link></NavDropdown.Item>
            <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/ai-technology" className='custlink'>AI-Technology</Link></NavDropdown.Item>
            <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/video-product" className='custlink'>Video-Prduction</Link></NavDropdown.Item>
            <NavDropdown.Item href="#" className='navdropdown-item'><Link to="/brandDesign" className='custlink'>Brand-Designing</Link></NavDropdown.Item>
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
          <Button className='indexform-icon navicon' onClick={handleClosenav}>
                <CloseIcon style={{color:"white"}}/>
                  </Button>
      
                  </div>
                  )}
                </div>
              </div>
            </div>
          <div className='aboutheadtop-imagediv'>
          <img src={abouthead} alt="" className='aboutheadtop-img'/>
          <div className='aboutheadtop-imagediv-span'>
              About Us
              <span>.</span>
          </div>
          <div className='aboutheadtop-imagediv-bottom'>
              <CottageIcon className='aboutheadtop-imagediv-bottom-logo'/>
              <div className='aboutheadtop-imagediv-bottom-span'>About Us</div>
          </div>
          </div>
          <div className='aboutfewwords-div'>
              <div className='aboutfewwords'>
              <div className='aboutfewwords-span1'>About few words</div>
              <div className='aboutfewwords-span2'>
                  <p style={{fontSize:"23px"}}>THE STORY OF WHO WE ARE</p>
                  <p style={{fontSize:"20px",marginTop:"-10px",fontWeight:"bold"}}>We understand what you need and we design the 
                  solutions</p>
                  <p style={{textAlign:"justify",marginTop:"-5px",fontFamily:"Muli",fontSize:"17px"}} >Akeed Technology, as our name itself reveals, offers IT infrastructure 
                  services to businesses in the UAE. We now have a world of technological 
                  advancement that forces companies to bring the changes that help them 
                  run their business in a better way. IT Solutions acts as a trusted service 
                  partner for different industries offering high-quality IT infrastructure 
                  services. We provide telecom solutions, telecom products, IT solutions, IT 
                  support, website solutions, security, audio-visual solutions, hardware 
                  services, software solutions.
                  Our expert team of certified professionals with extensive industry experience brings high-quality service to our clients. We focus on building a 
                  long-term service relationship to help clients achieve their business goals. 
                  Our passion for serving brought us a clientele of satisfied customers 
                  across UAE, from small-scale companies to large business organizations.</p>
              </div>
          </div>
          <div className='aboutpage-images-words'>
              <img src={robo1} alt="" className='aboutpage-images-words-img1'/>
              <img src={robo2} alt="" className='aboutpage-images-words-img2'/>
          </div>
          <div className='aboutpagehead-points-maindiv'>
          <div className='aboutpagehead-points'>
          <Table>
                  <tr className='ABOUTPAGETR'>
                    <td ><ArrowRightIcon className='aboutpagehead-points-icon'/>
                    <Link to="/digitalmarketing" onClick={() => window.scrollTo(0, 0)} style={{textDecoration:"none",color:"inherit",textDecorationColor:"white"}}>
                      Digital Marketing</Link></td> 
                      <td><ArrowRightIcon className='aboutpagehead-points-icon'/>
                      <Link to="/webdesign" onClick={() => window.scrollTo(0, 0)} style={{textDecoration:"none",color:"inherit",textDecorationColor:"white"}}>
                        Website Development</Link> </td>
                  </tr>
                  <tr className='ABOUTPAGETR'>
                      <td><ArrowRightIcon className='aboutpagehead-points-icon'/><Link to="/mobileapp" onClick={() => window.scrollTo(0, 0)} style={{textDecoration:"none",color:"inherit",textDecorationColor:"white"}}>Smart Mobile Apps</Link></td>
                      <td><ArrowRightIcon className='aboutpagehead-points-icon'/><Link to="/ai-technology" onClick={() => window.scrollTo(0, 0)} style={{textDecoration:"none",color:"inherit",textDecorationColor:"white"}}>Ai Tech Solution</Link></td>
                  </tr>
                  <tr className='ABOUTPAGETR'>
                      <td><ArrowRightIcon className='aboutpagehead-points-icon'/><Link to="/video-product" onClick={() => window.scrollTo(0, 0)} style={{textDecoration:"none",color:"inherit",textDecorationColor:"white"}}>Social Media & Video Production</Link></td>
                      <td><ArrowRightIcon className='aboutpagehead-points-icon'/><Link to="/brandDesign" onClick={() => window.scrollTo(0, 0)} style={{textDecoration:"none",color:"inherit",textDecorationColor:"white"}}>Brand design & making</Link></td>
                  </tr>
                </Table>
          </div>
          <div className='aboutpagehead-points-maincont'>
          We focus on serving businesses with quality solutions updated 
          based on changes in the technological world. Our team of certified 
          experts with extensive experience targets high-level customer satisfaction
          by offering services exceeding their expectations.
          </div>
          </div>
          </div>
          <div className='chooseusmainabout'>
          <div className='chooseusabout chooseusabouthead'>
                <div className='diglast-div-left about-div'>
                <img src={port} alt="" className=' aboutpageimg' />
                </div>
                <div className='diglast-div-right aboutheadright' style={{marginLeft:"40px"}}>
                  <div className='diglast-div-right-one aboutpagerightone'>
                  Why Choose Us?
                  </div>
                  <div className='diglast-div-right-2'>
                      <ArrowRightIcon className='digital-points-icon'/>Strategic Planning<br></br>
                      <ArrowRightIcon className='digital-points-icon'/> Investment Trusts<br></br>
                    <ArrowRightIcon className='digital-points-icon'/> Financial Projection<br></br>
                    <ArrowRightIcon className='digital-points-icon'/> Consulting
                  </div>
                  <Link to="/"><button className='about-right-main-button' >Choose us</button></Link>
                </div>
                </div>
          </div>
      </div>
    )
  }

  export default Abouthead