import React from 'react';
import './Footer.css';

// const Footer = ({year, name}) => {
  const Footer = ({name}) => {
  return (
    <footer>
      <i>
      {/* © {year} {name} */}
  © {new Date().getFullYear()} {name}
      </i>
    </footer>
  );
}

export default Footer;
