import React from 'react';
import CustomCard from './Cards/Card';
import './Portfolio.scss';
import { Projects } from './Cards/CardData';

const Portfolio = () => {
  return (
    <div className='portfolio-content'>
      <h1>My Portfolio</h1>
      <div className='portfolio-cards'>
        {Projects.map((project, index) => {
          return (
            <CustomCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
