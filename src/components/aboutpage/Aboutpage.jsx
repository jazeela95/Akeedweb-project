import React, { useEffect } from 'react'
import Abouthead from './aboutpage-head/Abouthead'
import Layout from '../Layout';

const Aboutpage = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <Layout>
        <Abouthead/>
        </Layout>
    </div>
  )
}

export default  Aboutpage