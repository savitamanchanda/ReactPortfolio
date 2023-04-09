import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/styles/Footer.css';

export default function Footer() {
    return (
      <div className='footer'>
            <a href="https://github.com/savitamanchanda" className='github'><FontAwesomeIcon icon="fa-brands fa-github" /></a>  
            <a href="https://www.linkedin.com/in/savitamanchanda" className='linkedin'><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>  
            <a href="mailto: manchandasavita3@gmail.com" className='email'><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>  
      </div>
    );
  }