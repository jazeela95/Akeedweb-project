
import React, { useState } from 'react'
import {  Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import webdesign from "../../../assets/images/webdesign.avif"
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import logo from "../../../assets/images/akeedlogo.png";
import CloseIcon from '@mui/icons-material/Close';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
// import CameraIcon from '@mui/icons-material/Camera';
// import Diversity2Icon from '@mui/icons-material/Diversity2';
// import ExtensionIcon from '@mui/icons-material/Extension';
import DoneIcon from '@mui/icons-material/Done';
import port from "../../../assets/images/port-img1-4.jpg"
// import des from "../../../assets/images/post-img1-1.png"
import brandcr1 from "../../../assets/images/post-img1-2.png"
import brandcr2 from "../../../assets/images/post-img1-1.png"
import brandcr3 from "../../../assets/images/port-img1-7.jpg"
import "./brandDesign.css"

const BrandDesign = () => {
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
    <div className='brand-design-main'>
           <div style={{ position: "relative",overflow:"hidden" }} className='index-main-bar'>
      <div style={{ display: "flex" }} className='aboutheadtop'>
            <div className='homemain-topbar-left'>
              <div className='homemain-topbar-left-logodiv'>
              <Link to="/"> <img className='homemain-topbar-left-img' src={logo} alt="" style={{cursor:"pointer"}}/></Link>
              </div>
            </div>
            <div className='website-middle'>
            <div className='navbar-right' style={{marginLeft:"-180px"}}>
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
            <div className='homemain-topbar-right' >
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
        <div className='aboutheadtop-imagediv brandheaddiv'>
        <div className='brandtopspan ' style={{display:"flex"}}>
            <div className='brandhead-left'>
        Discover the World of <span style={{color:"rgb(250, 19, 96)"}}>branding</span>
            <span>.</span>
            <div className='brandhead-left-span2'>We Create Unique Branding</div>
            <div className='brandhead-left-span3'>We are professional Designer</div>
            <div>
            <Link to="/"><button className='about-right-main-button brandbutton' style={{fontSize:"15px",marginTop:"30px",backgroundColor:"rgb(250, 19, 96",paddingTop:"-90px",height:"50px"}}>
               HIRE HERE
               </button></Link>
                </div>
            </div>
            <div className='brandhead-right'>
            <img src={port} alt="" className='curser5-img dig-img brand-div-img'
              />
            </div>
        </div>
        <div className='aboutheadtop-imagediv-bottom'>
            <CottageIcon className='aboutheadtop-imagediv-bottom-logo'/>
            <div className='aboutheadtop-imagediv-bottom-span'>Create Unique Branding</div>
        </div>
        </div>
          <div className='brand-card'>
            <div className='brand-card-1'>
                <img src={brandcr1} alt="" className='brand-card-1-img'/>
                <div className='brand-card-1-div1'>
                    <div style={{fontSize:"1.62rem",fontWeight:"bold"}}>Responsive designs</div>
                    <div style={{textAlign:"justify",marginTop:"20px"}}>You can get designs that are responsive to all screens and electronic 
                        devices, even smart phones.</div>
                        <div className='brand-card-1-div1-logo-div'><ArrowForwardIcon/></div>
                </div>
            </div>
            <div className='brand-card-1'>
                <img src={brandcr2} alt="" className='brand-card-1-img'/>
                <div className='brand-card-1-div1' style={{backgroundColor:"#038bb9"}}>
                    <div style={{fontSize:"1.62rem",fontWeight:"bold"}}>Reflects the message</div>
                    <div style={{textAlign:"justify",marginTop:"20px"}}>The designs we present to you can express your desired goal and 
clarify your desired message.</div>
                        <div className='brand-card-1-div1-logo-div'><ArrowForwardIcon/></div>
                </div>
            </div>
            <div className='brand-card-1'>
                <img src={brandcr3} alt="" className='brand-card-1-img'/>
                <div className='brand-card-1-div1' style={{backgroundColor:"#505050"}}>
                    <div style={{fontSize:"1.62rem",fontWeight:"bold"}}>Distinctive designs</div>
                    <div style={{textAlign:"justify",marginTop:"20px"}}>You will get your designs unique and suitable for everything new,
                    and highly experienced work team trained.</div>
                        <div className='brand-card-1-div1-logo-div'><ArrowForwardIcon/></div>
                </div>
            </div>
            </div> 
           
            <div className='diglast-div' style={{marginBottom:"200px"}}>
              <div className='diglast-div-left'>
              <img src={port} alt="" className='curser5-img web-img' />
              </div>
              <div className='diglast-div-right' style={{marginBottom:"-30px"}}>
                <div className='diglast-div-right-one'>
                We Create Unique <span style={{color:'rgb(250, 19, 96)'}}> Branding</span>
                </div>
                <div className='diglast-div-right-2'>
                <div className='diglast-div-right-2 ai-second-div-left-span3' style={{fontWeight:"normal"}}>
                    <DoneIcon className='digital-points-icon'/> Branding Materials<br></br>
                    <DoneIcon className='digital-points-icon'/>  Other Creative Services<br></br>
                   <DoneIcon className='digital-points-icon'/> Responsive designs<br></br>
                   <DoneIcon className='digital-points-icon'/>Distinctive designs<br></br>
                   <DoneIcon className='digital-points-icon'/> Expert work team<br></br>
                   <DoneIcon className='digital-points-icon'/> Reflects the desired message<br></br>
                </div>
                </div>
                <Link to="/aboutpages"><button className='about-right-main-button' style={{marginTop:"45px"}} >ABOUT US</button></Link>
              </div>
            </div>
            <div className='video-4th-div'>
                <div className='brand4thdiv' >
                    <div className='brand4thdiv-top'>
                      <div className='brand4thdivdivs'>
                        <span className='brand4thdivdivs-span'>Responsive designs</span>
                        <div className='brand4thdivdivs-shape'>
                        <div className='brand4thdivdivs-shape1'></div>
                        <div className='brand4thdivdivs-shape2'></div>
                        <div className='brand4thdivdivs-shape-span'>90%</div>
                        </div>
                      </div>
                      <div className='brand4thdivdivs' style={{marginLeft:"200px"}}>
                        <span className='brand4thdivdivs-span'>Distinctive designs</span>
                        <div className='brand4thdivdivs-shape'>
                        <div className='brand4thdivdivs-shape1 shape11'></div>
                        <div className='brand4thdivdivs-shape2'></div>
                        <div className='brand4thdivdivs-shape-span span11'>80%</div>
                        </div>
                      </div>
                    </div>
                    <div className='brand4thdiv-bottom'>
                    <div className='brand4thdivdivs'>
                        <span className='brand4thdivdivs-span'>Expert work team</span>
                        <div className='brand4thdivdivs-shape'>
                        <div className='brand4thdivdivs-shape1 shape12'></div>
                        <div className='brand4thdivdivs-shape2'></div>
                        <div className='brand4thdivdivs-shape-span span1 '>85%</div>
                        </div>
                      </div>
                      <div className='brand4thdivdivs' style={{marginLeft:"200px"}}>
                        <span className='brand4thdivdivs-span'>Reflects the desired message</span>
                        <div className='brand4thdivdivs-shape'>
                        <div className='brand4thdivdivs-shape1 shape11 shape111'></div>
                        <div className='brand4thdivdivs-shape2'></div>
                        <div className='brand4thdivdivs-shape-span span2'>95%</div>
                        </div>
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default BrandDesign