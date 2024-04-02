// import logo from '../public/akeed.png';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Webdesig from './components/webdisigndetails/Webdesig';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Index1 from './components/index/Index1';
import Newletter from './components/newsletter/Newletter';
import Clientlogo from './components/clientlogos/Clientlogo';
import { Blog } from './components/blog/Blog';
import Count from './components/count/Count';
import Video from './components/video/Video';
import Portfolium from './components/portfolio/Portfolium';
import About from './components/about/About';
import Service from './services/Service';
import Navbar from './components/Navbar/Navbar';
import Aboutpage from "./components/aboutpage/Aboutpage"
import Abouthead from './components/aboutpage/aboutpage-head/Abouthead';
import Digitalmarketing from './components/aboutpage/digitalmarketing/Digitalmarketing';
import { useEffect } from 'react';
import WebDesign from './components/aboutpage/webDesigning/WebDesign';
import Mobileapp from './components/aboutpage/mobileapp/Mobileapp';
import Aitechnology from './components/aboutpage/Aitechnology/Ai-technology';
import Videoproduction from './components/aboutpage/videoproduction/Videoproduction';
import BrandDesign from './components/aboutpage/Brandingpage/BrandDesign';


function App() {
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Service/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolium/> } />
        <Route path="/video" element={<Video/>} />
        <Route path="/count" element={<Count/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/clientlogo" element={<Clientlogo/>} />
        <Route path="/newsletter" element={<Newletter/>} />
        <Route path="/index1" element={<Index1/>}/>
        <Route path="/aboutpages" element={<Aboutpage/>}/>
        <Route path="/aboutpagehead" element={<Abouthead/>}/>
        <Route path="/digitalmarketing" element={<Digitalmarketing/>}/>
        <Route path="/webdesign" element={<WebDesign/>}/>
        <Route path="/mobileapp" element={<Mobileapp/>}/>
        <Route path="/ai-technology" element={<Aitechnology/>}/>
        <Route path="/video-product" element={<Videoproduction/>}/>
        <Route path="/brandDesign" element={<BrandDesign/>}/>
        
        </Routes>
        <Footer/>
        <Webdesig/>
        
        
    
    </div>
  );
}

export default App;
