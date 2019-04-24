import React from 'react';
import WelcomeBox from './WelcomeBox'

const Banner = () => (
  <div style={style.bigBox}>
      <WelcomeBox />
  </div>
);

export default Banner;

const style = {
  bigBox: {
    backgroundImage: 'linear-gradient(to bottom right, darkgreen, lightgreen, green)',
    height: '75vh',
    paddingTop: '10em',

  }
}
