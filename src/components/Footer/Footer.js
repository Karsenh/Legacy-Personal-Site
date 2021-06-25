import React from 'react';
import './Footer.scss';

const Footer = ({ AttributionName }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='footer'>
      <p>
        {(AttributionName = 'Karsen')} | {year}{' '}
      </p>
    </div>
  );
};

export default Footer;
