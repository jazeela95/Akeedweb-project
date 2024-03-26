// import logo from '../public/akeed.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Webdesig from './components/webdisigndetails/Webdesig';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Aboutpage from './components/pages/aboutpage/Aboutpage';
import Index1 from './components/index/Index1';
import Newletter from './components/newsletter/Newletter';
import Clientlogo from './components/clientlogos/Clientlogo';
import { Blog } from './components/blog/Blog';
import Count from './components/count/Count';
import Video from './components/video/Video';
import Portfolium from './components/portfolio/Portfolium';
import About from './components/about/About';
import Service from './services/Service';

function App() {
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
        <Route path="/aboutpage" element={<Aboutpage/>}></Route>
        </Routes>
        <Footer/>
        <Webdesig/>
        
        
    
    </div>
  );
}

export default App;
