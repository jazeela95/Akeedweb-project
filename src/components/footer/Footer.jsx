import React from 'react'
import "./footer.css"
import akeedlogo from "../../assets/images/akeedlogo1.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Footer = () => {
  return (
    <div className='footer-main'>
        <div>
            <img src={akeedlogo} alt="" className='footerlogo'/>
        </div>
        <div className='footerspan'>
            <span style={{color:"white"}} >IS NOT END, WE JUST THE </span>
            <span style={{color:"yellow"}}>
            BEGINNING
            </span>
        </div>
        <div className='FOOTERLOGO-MAIN'>
            <a href="https://www.facebook.com/"><FacebookIcon className='footericons'/></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en"><InstagramIcon className='footericons'/></a>
            <a href="https://twitter.com/i/flow/login"> <TwitterIcon className='footericons'/></a>
            <a href="https://www.linkedin.com/feed/"> <LinkedInIcon className='footericons'/></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en">< PinterestIcon className='footericons'/></a>
        </div>
    </div>
  )
}

export default Footer