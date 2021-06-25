import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='social-icons'>
      <a className='github-icon' href='https://www.google.com'>
        <FaGithub size={40} />
      </a>
      <a className='instagram-icon' href='https://www.google.com'>
        <FaInstagram size={40} />
      </a>
      <a className='linkedin-icon' href='https://www.google.com'>
        <FaLinkedin size={40} />
      </a>
    </div>
  );
};

export default SocialIcons;
