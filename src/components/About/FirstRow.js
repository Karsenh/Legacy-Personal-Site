import React from 'react';
import profilePic from '../../images/profilePic.jpg';
import SocialIcons from './SocialIcons/SocialIcons';
import { FaHtml5, FaJava, FaJs, FaPython } from 'react-icons/fa';

const FirstRow = () => {
  return (
    <div className='about-first'>
      <div className='about-name'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <img className='profile-pic' src={profilePic} alt='' />
        </div>

        <SocialIcons />
      </div>
      <div className='about-intro-statement'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',

            padding: '1rem 2rem',
          }}
        >
          <p>
            My name is <span className='custom-name'>Karsen Hansen</span>.
          </p>
          <p>
            <strong>Computer Science</strong> Graduate of{' '}
            <strong>Gonzaga University</strong> in Spokane Washington.
          </p>
          <p>
            I'm a passionate full-stack web developer, specializing in React.js
            with over three years of OOP experience across several programming
            languages
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '2.5rem',
              opacity: '15%',
            }}
          >
            <FaJs size={20} />
            <FaJava size={20} />
            <FaPython size={20} />
            <FaHtml5 size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
