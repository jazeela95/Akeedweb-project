import React from 'react'
import "./aboutpage.css"
import robo from "../../../assets/images/robo.jpg"
import robo1 from "../../../assets/images/robo11.jpg"
const Aboutpage = () => {
  return (
    <div>
    <div className='aboutpage-main-top'>
        <div className='aboutpage-left'>
        <img src={robo1} alt="" className="aboutpage-right-img"/>
        </div>
        <div className='aboutpage-middle'>
        <h1 className='aboutpage-middle-h2'>About Us</h1>
        <div className='aboutpage-middle-span1'>THE STORY OF WHO WE ARE</div>
        <div className='aboutpage-middle-span2'>We understand what you need and we design the solutions</div>
        <div className='aboutpage-middle-span3'>Akeed Technology, as our name itself reveals, offers IT infrastructure 
        services to businesses in the UAE. We now have a world of technological 
        advancement that forces companies to bring the changes that help them 
        run their business in a better way. IT Solutions acts as a trusted service 
        partner for different industries offering high-quality IT infrastructure 
        services. We provide telecom solutions, telecom products, IT solutions, IT 
        support, website solutions, security, audio-visual solutions, hardware 
        services, software solutions.<br></br><br></br>
        Our expert team of certified professionals with extensive industry experience brings high-quality service to our clients. We focus on building a 
        long-term service relationship to help clients achieve their business goals. 
        Our passion for serving brought us a clientele of satisfied customers 
        across UAE, from small-scale companies to large business organizations.</div>
        </div>
        <div className='aboutpage-right'>
          
        </div>
    </div>
    <div className='aboutpage-main-bottom'>
        <div className='aboutpage-main-bottom-left'>
          <img src={robo} className='aboutpage-main-bottom-left-img'/></div>
        <div className='aboutpage-main-bottom-right'>
            <h3>OUR VISION</h3>
            <div>We envision ourselves among the best companies in the Middle 
                East that contribute towards empowering organizations to handle 
                the abrupt changes caused by technological advancement. We 
                aspire to help companies in taking advantage of growing changes.
            </div>
            <h3>OUR MISSION</h3>
            <div>We focus on serving businesses with quality solutions updated 
                    based on changes in the technological world. Our team of certified 
                    experts with extensive experience targets high-level customer satisfaction
                    by offering services exceeding their expectations.</div>
                    <div className='aboutpage-main-bottom-right-lastspan'>end-to-end digital solutions for business growt</div>
        </div>
    </div>
    </div>
  )
}

export default Aboutpage