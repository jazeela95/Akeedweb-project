import React from 'react'
import Homemain from '../homemain/Homemain'
import Service from '../../services/Service'
import About from '../about/About'
const Home = () => {
  return (
    <div>
      <Homemain/>
      <Service/>
      <About/>
    </div>
  )
}

export default Home