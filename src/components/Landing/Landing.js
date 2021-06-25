import AnimatedWaves from './Waves';
import React from 'react';
import NavButtons from './NavButtons';
import Footer from '../Footer/Footer';
import Particles from 'react-particles-js';
import './Landing.scss';

const Landing = ({ children }) => {
  return (
    <div className='site-content'>
      <div className='header'>
        <div className='header-content'>
          <h1>
            Hi, I'm <strong>Karsen</strong>. 👋🏼
          </h1>
          <NavButtons />
        </div>

        <Particles style={{ opacity: '40%' }} />
      </div>

      <AnimatedWaves />

      <div className='content flex'>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
