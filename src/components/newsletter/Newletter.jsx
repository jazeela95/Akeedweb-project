import React from 'react'
import "./newletter.css"
import para from "../../assets/images/parallax3.jpg"
import TelegramIcon from '@mui/icons-material/Telegram';
const Newletter = () => {
  return (
    <div className='newslettermain'>
        <div className='newslettermain-left'> 
            <div className='newslettermain-left-span1'>Sign Up To Our Newsletter</div>
            <div className='newslettermain-left-span2'>To get the latest news from us please subscribe your email.</div>
            <form>
  <div class="mb-3">
    <input type="text" class="form-control" id="exampleInputEmail1"
    placeholder='subscribe our newsletter'
    aria-describedby="emailHelp"/>
    <TelegramIcon className='newformicon'/>
    
  </div>
  </form>
        </div>
        <div className='newslettermain-right'>
            <img src={para} alt="" className='newslettermain-right-img'/>
        </div>
    </div>
  )
}

export default Newletter