import React from 'react'
import "./homemain.css"
import logo from "../../assets/images/akeed.png";
import { Card, Carousel,Button } from 'react-bootstrap';
import HomemainDetails from "./Homemaindetail"
import backimg1 from "../../assets/images/slide1-shape3.png";
import backimg2 from "../../assets/images/slide1-shape1.png";
import backimg3 from "../../assets/images/slide1-shape2.png";
import manhome from "../../assets/images/slide1-mckp1.png";
import SearchIcon from '@mui/icons-material/Search';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
const Homemain = () => {
    const chunkArray = (arr, chunkSize) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
          chunkedArr.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArr;
      };
    
      // Chunk the serviceDetails array into groups of 3
      const chunkedDetails = chunkArray(HomemainDetails, 3);
  return (
    <div>
        <div className='homemain-maindiv'>
        
        <div className='homemain-topbar-backimg2div'>
        <img src={backimg2} alt="" className='homemain-topbar-backimg2'/>
        </div>
        <div className='homemain-topbar-backimg3div'>
        <img src={backimg3} alt="" className='homemain-topbar-backimg3'/>
        </div>
        
        <div className='homemain-topbar-backimg1div'>
        <img src={backimg1} alt="" className='homemain-topbar-backimg1'/>
        </div>
        
       
        
            <div className='homemain-topbar'>
                <div style={{display:"flex"}}>
                <div className='homemain-topbar-left'>
               
                    <div className='homemain-topbar-left-logodiv'>
                        <img  className='homemain-topbar-left-img'src={logo} alt=""/>
                        <span>FOR ALL TECHNOLOGY & BUSINESS SOLUTION</span>
                    </div>
                </div>
                <div className='homemain-topbar-right'>
                  <div className='homemain-topbar-right-div'>
                    <Button className='searchicon-homemain-button'>
                      <SearchIcon className='searchicon-homemain'/>
                    </Button>
                    <Button className='navicon-homemain-button'>
                      <DensityMediumIcon className='navicon-homemain'/>
                    </Button>
                  </div>
                </div>
                </div>
            <div className='homemain-bottombar'>
                <div className='homemain-bottombar-left'>
                <Carousel interval={5000} pause={false} wrap={true}> {/* Auto sliding every 5 seconds */}
          {chunkedDetails.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <div className='homemain-bottombar-left-carddiv'>
                {chunk.map((item) => (
                  <Card key={item.id} className="homemain-bottombar-left-card">
                      <Card.Body>
                        <Card.Text className='homemain-bottombar-left-cardhead'>
                          {item.headline}
                        </Card.Text>
                        <Card.Text className='homemain-bottombar-left-cardcont'>
                          {item.contents}
                        </Card.Text>
                        
                        <button className='about-right-main-button' style={{marginTop:"90px"}}>View Projects</button>
                        
                      </Card.Body>
                  </Card>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
        <div className='homemain-bottombar-right'>
                    <img src={manhome} alt="" className='homemain-bottombar-rightimg'/>
            </div>
                    </div>
                    </div>

        </div>
    </div>
  )
}

export default Homemain