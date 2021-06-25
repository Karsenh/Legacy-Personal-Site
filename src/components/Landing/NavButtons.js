import React from 'react';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import myPDF from './myResume.pdf';

const NavButtons = () => {
  const downloadFile = () => {
    window.location.href = myPDF;
  };

  return (
    <>
      <Button
        onClick={downloadFile}
        className='custom-btn'
        variant='outlined'
        color='primary'
      >
        <DescriptionIcon />
        <span style={{ marginLeft: '0.5rem' }}>Download Resume</span>
      </Button>
    </>
  );
};

export default NavButtons;
