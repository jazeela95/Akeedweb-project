import React from 'react'
import aboutimage from "../../assets/images/about-mckp1.jpg"
import { Link} from 'react-router-dom';
import "./about.css"
const About = () => {
 
  return (
    <div className='about-main-div'>
        <div className='about-left-main'>
          <img src={aboutimage} className='about-left-main-image' alt=""/>
        </div>
        <div className='about-right-main'>
          <div className='about-right-div'>
            <span className='about-right-main-span1' style={{textAlign:"left"}}>Offering Bespoke Solutions</span><br></br><br></br>
            <span className='about-right-main-span2'>
            Akeed Technology, as our name itself reveals, offers IT infrastructure 
services to businesses in the UAE. We now have a world of technological 
advancement that forces companies to bring the changes that help them 
run their business in a better way. IT Solutions acts as a trusted service 
partner for different industries offering high-quality IT infrastructure 
services. We provide telecom solutions, telecom products, IT solutions, IT 
support, website solutions, security, audio-visual solutions, hardware 
services, software solutions.

            </span><br></br>
            <Link to="/aboutpages"><button className='about-right-main-button' >ABOUT US</button></Link>
            </div>
        </div>
    </div>
  )
}

export default About