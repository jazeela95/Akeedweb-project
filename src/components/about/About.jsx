import React from 'react'
import aboutimage from "../../assets/images/about-mckp1.jpg"
import "./about.css"
const About = () => {
  return (
    <div className='about-main-div'>
        <div className='about-left-main'>
          <img src={aboutimage} className='about-left-main-image' alt=""/>
        </div>
        <div className='about-right-main'>
          <div className='about-right-div'>
            <span className='about-right-main-span1'>Offering Bespoke Solutions</span><br></br><br></br>
            <span className='about-right-main-span2'>We envision ourselves among the best companies in the Middle 
                East that contribute towards empowering organizations to handle 
                the abrupt changes caused by technological advancement. We 
                aspire to help companies in taking advantage of growing changes.
            </span><br></br>
            <button className='about-right-main-button'>ABOUT US</button>
            </div>
        </div>
    </div>
  )
}

export default About