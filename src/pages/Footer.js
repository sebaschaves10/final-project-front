import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'dodgerblue',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    bottom: 0,
    width: '100%',
  };

  const iconStyle = {
    fontSize: 30,
    color: 'white',
    margin: '0 5px',
  };

  return (
    <div style={footerStyle}>
      <div>
        <a href="https://www.facebook.com/sebaschaves10" target="_blank" rel="noopener noreferrer">
          <FacebookIcon style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/sebaschaves10" target="_blank" rel="noopener noreferrer">
          <InstagramIcon style={iconStyle} />
        </a>
        <a href="https://twitter.com/sebaschaves10" target="_blank" rel="noopener noreferrer">
          <TwitterIcon style={iconStyle} />
        </a>
        <a href="https://github.com/sebaschaves10" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/sebaschaves10" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={iconStyle} />
        </a>
      </div>
      <div className='mt-3'>
        <h6>Copyright © 2024 Crazy Posts. Todos los derechos reservados.</h6>
      </div>
      <div>
        <p>Presentado por: Sebastian Chaves</p>        
      </div>
    </div>
  );
};

export default Footer;

