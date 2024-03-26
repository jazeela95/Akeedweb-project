import React from 'react'
import "./video.css"
import videoimg from "../../assets/images/parallax1.jpg"
import YouTubeIcon from '@mui/icons-material/YouTube';
const Video = () => {
  return (
    <div className='vediomain'>
      <div>
        <img src={videoimg} alt="" className='videoimage'/>
        <div className='videobotomdiv'>
        <div className='videobotomdiv-circle'>
          <YouTubeIcon className='videobotomdiv-circle-logo'/>
        </div>
        <div className='videobotomdiv-para1'>How can we help?</div>
        <div className='videobotomdiv-para2'>Check video presentation to find out more about us</div>
       <a href="https://www.youtube.com/"> <button className='about-right-main-button videobutton'>CLICK ME</button></a>
        </div>
      </div>
    </div>
  )
}

export default Video