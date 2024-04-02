import React from 'react'
import "./blog.css"
import { Carousel } from 'react-bootstrap'
import blog1 from "../../assets/images/post-img1-1.png"
import blog2 from "../../assets/images/post-img1-2.png"
import funcimg from "../../assets/images/parallax2.jpg"
import funct1 from "../../assets/images/serv-icon1.png"
import funct2 from "../../assets/images/feat-icon2.png"
import funct3 from "../../assets/images/feat-icon3.png"
export const Blog = () => {
  return (
    <div className='blog-main-div'>
      <div>
        <div className='bloghead-span1'>Latest blog</div>
        <div className='bloghead-span2'> Around Our Agency</div>
      </div>
         <Carousel interval={4000} pause={false} wrap={true}> {/* Auto sliding every 5 seconds */}
            <Carousel.Item>
              <div className='carousel-item1-frst'>
                <div className='carousel-item1-left'>
                    <div className='carousel-item1-frst-left-frst'>BRANDING</div>
                    <div className='carousel-item1-frst-left-second'>Make your own brand design</div>
                    <div className='carousel-item1-frst-left-third'>
                    You can get designs that are responsive to all screens and electronic devices, even smart phones and ill get your designs unique and suitable for everything new
                    </div>
                    <button className='about-right-main-button blog-botton'>Read More</button>
                </div>
                <div className='carousel-item1-right'>
                    <img src={blog1} alt="" className='carousel-item1-frst-rightimg'/>
                </div>
              </div>
              <div className='carousel-item1-second'>
                <div className='carouse2-item1-left'>
                <img src={blog2} alt="" className='carousel-item1-frst-rightimg'/>
                </div>
                <div className='carousel-item2-right'>
                    <div className='carousel-item1-frst-left-frst second'>DEVELOPEMENT</div>
                    <div className='carousel-item1-frst-left-second'>Web design & Developement</div>
                    <div className='carousel-item1-frst-left-third'>
                    We add creativity to your business,Good design of your website is key to creating easy navigation for visitors; 
                    Which increases user onversions into customers
                    </div>
                    <button className='about-right-main-button blog-botton'>Read More</button>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='carousel-item1-frst'>
                <div className='carousel-item1-left'>
                    <div className='carousel-item1-frst-left-frst'>MEDIA</div>
                    <div className='carousel-item1-frst-left-second'>Social media & Vedio production</div>
                    <div className='carousel-item1-frst-left-third'>
                    We specialize in creating valuable content for brands and businesses. 
                    We will make sure your message is delivered through our wealth of expertise.
                    </div>
                    <button className='about-right-main-button blog-botton'>Read More</button>
                </div>
                <div className='carousel-item1-right'>
                    <img src={blog2} alt="" className='carousel-item1-frst-rightimg'/>
                </div>
              </div>
              <div className='carousel-item1-second'>
                <div className='carouse2-item1-left'>
                <img src={blog1} alt="" className='carousel-item1-frst-rightimg'/>
                </div>
                <div className='carousel-item2-right'>
                    <div className='carousel-item1-frst-left-frst second'>AI DEVELOPEMENT</div>
                    <div className='carousel-item1-frst-left-second'>Artificial Intelligence</div>
                    <div className='carousel-item1-frst-left-third'>
                    This technology add a new way to suggest the user while searching integration of Machine Learning, voice recognition, and image recognition,
                     etc in mobile apps takes the experience to the high level.
                    </div>
                    <button className='about-right-main-button blog-botton'>Read More</button>
                </div>
                </div>
            </Carousel.Item>
         
        </Carousel>
        <div className='functionality-main'>
            <div>
                <img src={funcimg} className='functionality-main-leftimg' alt=""/>
            </div>
            <div >
              <div className='functionality-main-rightfrst'>Greate Look &<br></br>functionality</div>
              <div className='functionality-main-rightscnd'>
                <img src={funct1} className='functionality-main-rightscnd-img' alt=""/>
                <div style={{marginLeft:"20px"}}>
                  <div className='functionality-main-rightscnd--span1'>Responsive Design</div>
                  <div className='functionality-main-rightscnd--span2'>Investigationes demonstraverunt lectores 
                  legere me lius quod.</div>
                </div>
              </div>
              <div className='functionality-main-rightscnd' style={{top:"330px"}}>
                <img src={funct2} className='functionality-main-rightscnd-img' alt=""/>
                <div style={{marginLeft:"20px"}}>
                  <div className='functionality-main-rightscnd--span1'>Easy Interface</div>
                  <div className='functionality-main-rightscnd--span2'>Investigationes demonstraverunt
                   lectores legere me lius quod.</div>
                </div>
              </div>
              <div className='functionality-main-rightscnd' style={{top:"450px"}}>
                <img src={funct3} className='functionality-main-rightscnd-img' alt=""/>
                <div style={{marginLeft:"20px"}}>
                  <div className='functionality-main-rightscnd--span1'>Awesome Support</div>
                  <div className='functionality-main-rightscnd--span2'>Investigationes demonstraverunt lectores 
                  legere me lius quod.</div>
                </div>
              </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}
