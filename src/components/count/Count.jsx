import React, { useState, useEffect } from 'react';
import "./count.css";
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const Count = () => {
  // State to hold the numbers
  const [counts, setCounts] = useState({
    coffeeTea: 1982,
    experience: 44,
    hoursProjects: 21,
    nationalProjects: 121,
    professionalServices: 1982
  });

  // Function to update the numbers
  const updateNumbers = () => {
    // Example: Incrementing the numbers quickly
    setCounts(prevCounts => ({
      coffeeTea: prevCounts.coffeeTea + Math.floor(Math.random() * 50), // Adjust incrementation rate as needed
      experience: prevCounts.experience + Math.floor(Math.random() * 10),
      hoursProjects: prevCounts.hoursProjects + Math.floor(Math.random() * 100),
      nationalProjects: prevCounts.nationalProjects + Math.floor(Math.random() * 20),
      professionalServices: prevCounts.professionalServices + Math.floor(Math.random() * 50)
    }));
  };

  useEffect(() => {
    // Update numbers every second
    const interval = setInterval(() => {
      updateNumbers();
    }, 10);

    // Stop counting after 3 seconds
    const stopInterval = setTimeout(() => {
      clearInterval(interval);
    }, 1000);

    // Cleanup intervals on component unmount or when stopping
    return () => {
      clearInterval(interval);
      clearTimeout(stopInterval);
    };
  }, []);
  return (
    <div className='count-main'>
      <div className='count-div1'>
        <div className="count-div1-logodiv">
          <FreeBreakfastOutlinedIcon className='count-div1-logo' />
        </div>
        <div className="count-div1-span1 count-scroll">{counts.coffeeTea}</div>
        <div className="count-div1-span2">Cups of coffee & tea</div>
      </div>
      <div className='count-div1'>
        <div className="count-div1-logodiv">
          <RedeemOutlinedIcon className='count-div1-logo' />
        </div>
        <div className="count-div1-span1 count-scroll">{counts.experience}+</div>
        <div className="count-div1-span2">Years of experience</div>
      </div>
      <div className='count-div1'>
        <div className="count-div1-logodiv">
          <DisplaySettingsIcon className='count-div1-logo' />
        </div>
        <div className="count-div1-span1 count-scroll">{counts.hoursProjects}+</div>
        <div className="count-div1-span2">Hours on projects</div>
      </div>
      <div className='count-div1'>
        <div className="count-div1-logodiv">
          <AssignmentTurnedInOutlinedIcon className='count-div1-logo' />
        </div>
        <div className="count-div1-span1 count-scroll">{counts.nationalProjects}</div>
        <div className="count-div1-span2">National Project</div>
      </div>
      <div className='count-div1'>
        <div className="count-div1-logodiv">
          <LightbulbOutlinedIcon className='count-div1-logo' />
        </div>
        <div className="count-div1-span1 count-scroll">{counts.professionalServices}</div>
        <div className="count-div1-span2">Professional Services</div>
      </div>
    </div>
  );
};

export default Count;
