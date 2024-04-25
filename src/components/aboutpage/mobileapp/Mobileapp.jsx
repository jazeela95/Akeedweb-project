import React, { useState } from 'react'
import "./mobileapp.css"
import {  Button, Card, CardBody, CardText} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';
import webdesign from "../../../assets/images/pattern4.jpg"
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import logo from "../../../assets/images/akeedlogo.png";
import ios from "../../../assets/images/ios.jpg";
import game from "../../../assets/images/games.jpg";
import mobileapp from "../../../assets/images/mobileapp.avif";
import mobile from "../../../assets/images/mobileimage.webp";
import android from "../../../assets/images/android.avif";
import CloseIcon from '@mui/icons-material/Close';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import AppsOutageRoundedIcon from '@mui/icons-material/AppsOutageRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';

const Mobileapp = () => {
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
        <Button className='indexform-icon navicon' onClick={handleClosenav}>
              <CloseIcon style={{color:"white"}}/>
                </Button>
     
                </div>
                )}
              </div>
            </div>
          </div>
        <div className='aboutheadtop-imagediv'>
        <img src={webdesign} alt="" className='aboutheadtop-img'/>
        <div className='aboutheadtop-imagediv-span webhead mobilehead' >
        Mobile App Developement Solutions
            <span>.</span>
            <div className='webhead-span mobileheadspan'>We are creating your own ideas</div>
            <Link to="/aboutpages"><button className='about-right-main-button' style={{fontSize:"15px",marginTop:"30px"}}>ABOUT US</button></Link>
        </div>
        <div className='aboutheadtop-imagediv-bottom'>
            <CottageIcon className='aboutheadtop-imagediv-bottom-logo'/>
            <div className='aboutheadtop-imagediv-bottom-span mobilebottomhead'>Mobile App Developement Solutions</div>
        </div>
        </div>
        <div className='mobileapp-main'>
          <div className='mobileapp-main-redspan'>/ WHAT MAKES</div>
          <div className='mobileapp-main-headspan'>Engross Your Business To The<br></br>
            Highest Demands With A Mobile App</div>
          <div className='mobileapp-main-paraspan'>The demand for new technology has
           opened the entryway for brilliant mobile applications created and utilized 
           by individuals for some reasons. The improvement of such a mobile application 
           is normally called app development. Humans are continuously developing, and more
            thoughts are coming into individuals' brains, bringing us more creative ideas and
             the development process at a faster speed. The following are a couple of
              motivations to comprehend the reason why a mobile application is turning out to be so 
              significant today.</div>
        </div>
        <div className='mobilecard-div'>
          <Card className='mobilecard-1'>
          <div className='mobilecard-div-imgdiv'>
            <img src={ios} alt="" className='mobilecard-1-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head'>
              Ios Apps
              </CardText>
              <CardText className='mobilecard-1-desrp'>
              The hardest of all, our experts do the creation of Ios apps with absolute ease. With our iPhone
               app development service, you get your app made instantly.
              </CardText>
            </CardBody>
          </Card>
          <Card className='mobilecard-2'>
          <div className='mobilecard-div-imgdiv'>
            <img src={android} alt="" className='mobilecard-1-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head'>
              Android Apps
              </CardText>
              <CardText className='mobilecard-1-desrp'>
              Bring your app made on the most demanded android by our experts.
               We make the app development possible as soon as you have ever expected.
              </CardText>
            </CardBody>
          </Card>
          <Card className='mobilecard-3'>
          <div className='mobilecard-div-imgdiv'>
            <img src={game} alt="" className='mobilecard-1-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head'>
              Game Apps
              </CardText>
              <CardText className='mobilecard-1-desrp'>
              We have a team of highly experienced game app developers
               who provide you with the creation of the finest game apps.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className='chooseusmain'>
          <div className='mobileapp-main-headspan'>
          Why Akeed Is The Top Choice For<br></br>
          Mobile App Development?
          </div>
          <div className='mobileapp-main-paraspan'>
          Mobile application is the most demanding thing in today's time. Therefore, people always choose the best, 
          and our work has always been in the limelight and the top choice of customers.
            </div>
            <div className='chooseusmain-lastdiv'>
              <div className='chooseusmain-lastdiv-div1' style={{marginRight:"30px"}}>
              <Card className='chooseusmain-lastdiv-div1-card' >
          <div className='chooseusmain-lastdiv-div1-imgdiv'>
            <SelectAllIcon className='chooseus-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head' style={{marginTop:"1px",fontSize:"23px"}}>
              Low Cost
              </CardText>
              <CardText className='mobilecard-1-desrp' style={{marginTop:"-5px",fontSize:"16px"}}>
              We have kept our prices extremely low so that each client of ours can avail of the top
               quality service.
              </CardText>
            </CardBody>
          </Card>
              <Card className='chooseusmain-lastdiv-div1-card' >
          <div className='chooseusmain-lastdiv-div1-imgdiv'>
            <AcUnitRoundedIcon  className='chooseus-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head' style={{marginTop:"1px",fontSize:"23px"}}>
              Success Focused
              </CardText>
              <CardText className='mobilecard-1-desrp' style={{marginTop:"-5px",fontSize:"16px"}}>
              We work for you with a vision of giving our best shot and bringing success to the way
               of our clients.
              </CardText>
            </CardBody>
          </Card>
              <Card className='chooseusmain-lastdiv-div1-card' >
          <div className='chooseusmain-lastdiv-div1-imgdiv'>
            <BurstModeIcon  className='chooseus-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head' style={{marginTop:"1px",fontSize:"23px"}}>
              Vast Industry Experience
              </CardText>
              <CardText className='mobilecard-1-desrp' style={{marginTop:"-5px",fontSize:"16px"}}>
              Working with us means working with the most
               experienced team in the field of mobile app development.
              </CardText>
            </CardBody>
          </Card>
              </div>
              <div className='chooseusmain-lastdiv-div2'>
                <img src={mobileapp} alt="" className='chooseusmain-lastdiv-div2-img'/>
              </div>
              <div className='chooseusmain-lastdiv-div1 mobdivcard' style={{marginLeft:"60px"}}>
              <Card className='chooseusmain-lastdiv-div1-card' >
          <div className='chooseusmain-lastdiv-div1-imgdiv'>
            <Diversity2RoundedIcon className='chooseus-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head' style={{marginTop:"1px",fontSize:"23px"}}>
              Reduce Risk
              </CardText>
              <CardText className='mobilecard-1-desrp' style={{marginTop:"-5px",fontSize:"16px"}}>
              Working with us means working with the most experienced team in the field of mobile
               app development.
              </CardText>
            </CardBody>
          </Card>
              <Card className='chooseusmain-lastdiv-div1-card' >
          <div className='chooseusmain-lastdiv-div1-imgdiv'>
            <AutoStoriesRoundedIcon  className='chooseus-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head' style={{marginTop:"1px",fontSize:"23px"}}>
              We Are Agile
              </CardText>
              <CardText className='mobilecard-1-desrp' style={{marginTop:"-5px",fontSize:"16px"}}>
              We stay highly updated with all the latest changes and technological demands and mold
               our services that way.
              </CardText>
            </CardBody>
          </Card>
              <Card className='chooseusmain-lastdiv-div1-card' >
          <div className='chooseusmain-lastdiv-div1-imgdiv'>
            <AppsOutageRoundedIcon className='chooseus-image'/>
            </div>
            <CardBody>
              <CardText className='mobilecard-1-head' style={{marginTop:"1px",fontSize:"23px"}}>
              One Partner For All
              </CardText>
              <CardText className='mobilecard-1-desrp' style={{marginTop:"-5px",fontSize:"16px"}}>
              You don't need to choose any other while working with us for the mobile app development work.
               We stand with you throughout.
              </CardText>
            </CardBody>
          </Card>
              </div>
            </div>
            <div className='video-4th-div'>
               
            </div>
            
        </div>
        <div className='mobile-4th-div' style={{paddingTop:"20px"}}>
                    
                    <div className='web-4th-div-div-right' style={{color:"black",fontSize:"40px",marginTop:"80px"}}>
                    Don't Let Your Trend Come Slow<br></br>
                  We Design The Most Demanding Apps
 
                    </div>
                    <div className='mobile-4th-div-imgdiv'>
                      <img src={mobile} alt="" className='mobile-4th-div-img'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Mobileapp