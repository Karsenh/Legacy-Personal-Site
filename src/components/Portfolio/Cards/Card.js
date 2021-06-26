import { Button } from '@material-ui/core';
import { GoLogoGithub } from 'react-icons/go';
import React from 'react';

const Card = ({ title, description, link, platform }) => {
  return (
    <div className='portfolio-card'>
      <h1>{title}</h1>
      <h2>{platform}</h2>
      <hr style={{ width: '5rem', margin: '1rem auto' }} />
      <p>{description}</p>
      <a href={link}>
        <Button variant='outlined' style={{ padding: '0 2rem' }}>
          <GoLogoGithub size={40} />
        </Button>
      </a>
    </div>
  );
};

export default Card;
