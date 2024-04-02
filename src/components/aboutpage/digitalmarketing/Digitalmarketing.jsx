import React, { useState } from 'react'
import "./digitalmarketing.css"
import {  Button, Card, Table } from 'react-bootstrap';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import logo from "../../../assets/images/akeedlogo.png";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import abouthead from "../../../assets/images/digital.avif";
import CottageIcon from '@mui/icons-material/Cottage';
import LaptopIcon from '@mui/icons-material/Laptop';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CameraIcon from '@mui/icons-material/Camera';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import ExtensionIcon from '@mui/icons-material/Extension';
import DoneIcon from '@mui/icons-material/Done';
import port from "../../../assets/images/port-img1-4.jpg"



const Digitalmarketing = () => {
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
    <div>
        <div style={{ position: "relative",overflow:"hidden" }} className='index-main-bar'>
      <div style={{ display: "flex" }} className='aboutheadtop'>
            <div className='homemain-topbar-left'>
              <div className='homemain-topbar-left-logodiv'>
              <Link to="/"> <img className='homemain-topbar-left-img' src={logo} alt="" style={{cursor:"pointer"}}/></Link>
              </div>
            </div>
            <div className='website-middle'>
            <div className='navbar-right' style={{marginLeft:"-160px",color:"white"}}>
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
                <NavDropdown.Item href="#" className='navdropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#" className='navdropdown-item'>Something else here</NavDropdown.Item>
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
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </div>
            </div>
            <div className='homemain-topbar-right'>
              <div className='homemain-topbar-right-div' style={{marginLeft:"100px"}}>
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
        <Button className='indexform-icon navicon digicon' onClick={handleClosenav} style={{marginLeft:"0px"}}>
              <CloseIcon style={{color:"white"}}/>
                </Button>
     
                </div>
                )}
              </div>
            </div>
          </div>
        <div className='aboutheadtop-imagediv'>
        <img src={abouthead} alt="" className='aboutheadtop-img'/>
        <div className='aboutheadtop-imagediv-span diital-top-span' >
            Digital Marketing
            <span>.</span>
        </div>
        <div className='aboutheadtop-imagediv-bottom'>
            <CottageIcon className='aboutheadtop-imagediv-bottom-logo'/>
            <div className='aboutheadtop-imagediv-bottom-span'>Digital Marketing</div>
        </div>
        <div className='marketing-caption-div'>
            <div className='marketing-caption-left'>Best solution of your Marketing</div>
            <div className='marketing-caption-right'>
            It is the promotion and marketing of goods and services to consumers through digital channels and electronic technologies. These digital channels can include the internet, mobile devices, social media platforms, 
            webinars, search engines, online customer communities and other digital platforms.
            <p style={{fontSize:"23px",color:"black",marginTop:"10px"}}>Experience the Future of Digital Marketing!</p>
            <p>Accelerating Business Growth Through Digital 
                Marketing Since 2014</p>
            </div>
        </div>
        <div className='digital-serices-main'>
                <div className='ditigal-services-head'>
                    Best Services
                    <p style={{fontSize:"15px",color:"gray",fontWeight:'normal'}}>Around Digital Marketing</p>
                </div>
                <div style={{marginLeft:"100px",marginTop:"70px"}} className='maincarddigdiv'>
                <Card className="maincardservices digital-card">
                    <div className='digcard-div-head1'>
                    <LaptopIcon className='digcard-div-head-icon'/>
                    </div>
                    <Card.Body>
                        <Card.Text className='maincardservicesname digcardname' style={{fontSize:"20px"}}>
                        Marketing
                        </Card.Text>
                        <Card.Text className='maincardservicesdetails' style={{color:"gray"}}>

                        It is a process to allow an organization 
                        to focus resources on the greatest 
                        opportunities to increase sales and 
                        achieve the company’s target.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="maincardservices digital-card">
                    <div className='digcard-div-head2'>
                    <AutoAwesomeMotionIcon className='digcard-div-head-icon'/>
                    </div>
                    <Card.Body>
                        <Card.Text className='maincardservicesname digcardname' style={{fontSize:"20px"}}>
                        Targeting
                        </Card.Text>
                        <Card.Text className='maincardservicesdetails' style={{color:"gray"}}>
                          We Research your target group and 
                          narrow your market. It allows you to tailor your marketing efforts 
                          to resonate with your target audience, increasing the chances of conversion.

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="maincardservices digital-card">
                    <div className='digcard-div-head3'>
                    <CardGiftcardIcon className='digcard-div-head-icon'/>
                    </div>
                    <Card.Body>
                        <Card.Text className='maincardservicesname digcardname' style={{fontSize:"20px"}}>
                        Growth Marketing
                        </Card.Text>
                        <Card.Text className='maincardservicesdetails' style={{color:"gray"}}>
                       We do Marketing strategy’s objective is to 
                        increase sales and gain a competitive
                        advantage over other competitors.  
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="maincardservices digital-card">
                    <div className='digcard-div-head1'>
                    <CameraIcon className='digcard-div-head-icon'/>
                    </div>
                    <Card.Body>
                        <Card.Text className='maincardservicesname digcardname' style={{fontSize:"20px"}}>
                        Experience the Future of Digital Marketing!
                        </Card.Text>
                        <Card.Text className='maincardservicesdetails ' style={{color:"gray"}}>

                        Accelerating Business Growth Through Digital 
                        Marketing Since 2014
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="maincardservices digital-card">
                    <div className='digcard-div-head2'>
                    <Diversity2Icon className='digcard-div-head-icon'/>
                    </div>
                    <Card.Body>
                        <Card.Text className='maincardservicesname digcardname' style={{fontSize:"20px"}}>
                        Online advertising 
      </Card.Text>
                        <Card.Text className='maincardservicesdetails' style={{color:"gray"}}>

                        A new way of how we purchase goods at
                        fingertips in modern era. Any business
                        that has online store or has products
                        available for sale online will certainly 
                        augment its sales figures.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="maincardservices digital-card">
                    <div className='digcard-div-head3'>
                    <ExtensionIcon className='digcard-div-head-icon'/>
                    </div>
                    <Card.Body>
                        <Card.Text className='maincardservicesname digcardname' style={{fontSize:"20px"}}>
                        multichannel marketing
                        </Card.Text>
                        <Card.Text className='maincardservicesdetails ' style={{color:"gray"}}>

                        It  refers to the practice of interacting with customers using
                         a combination of indirect and direct communication channels – websites, 
                         retail stores, mail order catalogs, direct mail, email, mobile, etc.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
            <div className='diglast-div'>
              <div className='diglast-div-left'>
              <img src={port} alt="" className='curser5-img dig-img' />
              </div>
              <div className='diglast-div-right'>
                <div className='diglast-div-right-one'>
                Never let your guard down by thinking
                </div>
                <div className='diglast-div-right-2'>
                    <DoneIcon className='digital-points-icon'/>Experience the Future of Digital Marketing!<br></br>
                    <DoneIcon className='digital-points-icon'/> We professionally
                      promote on
                      social media<br></br>
                   <DoneIcon className='digital-points-icon'/> reate multichannelmarketing<br></br>
                  <DoneIcon className='digital-points-icon'/> BWe analyze and cultivateyour audience
  
                </div>
                <Link to="/aboutpages"><button className='about-right-main-button' >ABOUT US</button></Link>
              </div>
            </div>
        </div>
    
    </div>
  )
}

export default Digitalmarketing