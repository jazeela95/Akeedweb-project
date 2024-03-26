import React from 'react'
import "./portfolium.css"
import port1 from "../../assets/images/port-img1-1.jpg"
import port2 from "../../assets/images/port-img1-2.jpg"
import port3 from "../../assets/images/port-img1-3.jpg"
import port4 from "../../assets/images/port-img1-4.jpg"
import port5 from "../../assets/images/port-img1-5.jpg"
import port6 from "../../assets/images/port-img1-6.jpg"
import port7 from "../../assets/images/port-img1-7.jpg"
const Portfolium = () => {
  return (
    <div>
        <div >
            <span className='portpoliospan1'>Portfolio</span><br></br>
            <span className='portpoliospan2'>Around our agency</span>
        </div>
        <div>
            <div className='port-top'>
            <div className='port-top-left'>
                <img src={port1} alt="" className='port-top-left-img'/>
                <div className='port-top-left-spandiv'>
                    <div className='port-top-left-span1'>Social Media &</div>
                    <div className='port-top-left-span2'>Digital Marketing</div>
                </div>
            </div>
            <div className='port-top-right'>
                <div className='port-top-right-top'>
                <img src={port2} alt="" className='port-top-righttop-img'/>
                <div className='port-top-righttop-spandiv'>
                    <div className='port-top-righttop-span1'>Brand Design &</div>
                    <div className='port-top-righttop-span2'>Making</div>
                </div>
                </div>
                <div className='port-top-right-bottom'>
                    <div className='port-top-right-bottom-left'>
                    <img src={port3} alt="" className='port-top-rightbottomleft-img'/>
                <div className='port-top-rightbottomspandiv'>
                    <div className='port-top-rightbottomleft-span1'>Metaverse</div>
                    <div className='port-top-rightbottomleft-span2'>Developement</div>
                </div>
                    </div>
                    <div className='port-top-right-bottom-right'>
                    <img src={port4} alt="" className='port-top-rightbottomright-img'/>
                <div className='port-top-rightbottomright-spandiv'>
                    <div className='port-top-rightbottomright-span1'>AI Technologies</div>
                    <div className='port-top-rightbottomright-span2'>solution</div>
                </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='port-bottom' style={{display:"flex"}}>
            <div className='port-bottom-left'>
            <div className='port-bottom-left-left'>
                    <div className='port-bottom-left-leftdiv'>
                    <img src={port5} alt="" className='port-bottom-left-left-img'/>
                <div className='port-bottom-left-spandiv'>
                    <div className='port-bottom-left-left-span1'>Website</div>
                    <div className='port-bottom-left-left-span2'>Developement</div>
                </div>
                    </div>
                    <div className='port-bottom-left-right'>
                    <img src={port6} alt="" className='port-bottom-left-right-img'/>
                <div className='port-bottom-left-right-spandiv'>
                    <div className='port-bottom-left-right-span1'>AI Technologies</div>
                    <div className='port-bottom-left-right-span2'>solution</div>
                </div>
                    </div>
                </div>
            </div>
            <div className='port-bottom-right'>
            <img src={port7} alt="" className='port-bottom-right-img'/>
                <div className='port-bottom-right-spandiv'>
                    <div className='port-bottom-right-span1'>Video</div>
                    <div className='port-bottom-right-span2'>production</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolium