import React from 'react';
import WelcomeBox from './WelcomeBox'

const Banner = () => (

  <div style={{height: '75vh', backgroundImage: 'linear-gradient(to bottom right, darkgreen, lightgreen, green)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <WelcomeBox />
  </div>

);

export default Banner;
