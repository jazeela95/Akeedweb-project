import React from 'react'
import "./clientlogo.css"
import complogo from "../../assets/images/logo.png"
const Clientlogo = () => {
  return (
    <div className='complogo-main'>
        <div className='complogo-1'><img src={complogo}  className='clientlogoimg' alt=""/></div>
        <div className='complogo-1'><img src={complogo} alt=""/></div>
        <div className='complogo-1'><img src={complogo} alt=""/></div>
        <div className='complogo-1'><img src={complogo} alt=""/></div>
    </div>
  )
}

export default Clientlogo