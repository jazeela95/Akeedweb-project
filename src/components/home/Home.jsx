import React, { useEffect } from 'react'
import Homemain from '../homemain/Homemain'
import Service from '../../services/Service'
import About from '../about/About'
import Portfolium from '../portfolio/Portfolium'
import Video from '../video/Video'
import Count from '../count/Count'
import { Blog } from '../blog/Blog'
import Clientlogo from '../clientlogos/Clientlogo'
import Newletter from '../newsletter/Newletter'
import Index1 from '../index/Index1'
import Layout from '../Layout'
// import { Routes, Route } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <Layout>
        <Index1/>
        <Service />
        <About/>
        <Portfolium/>
        <Video />
        <Count />
        <Blog />
        <Clientlogo />
        <Newletter />
        </Layout>
    </div>
  )
}

export default Home