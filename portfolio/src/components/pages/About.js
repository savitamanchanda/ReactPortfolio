import React from 'react';
import me from '../../components/assets/me.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={me} alt='' className='me'></img>
      <p>
        Welcome to my portfolio! I am an aspiring software developer. I currently work full time
        in Quality Assurance as a Post Development Testing Coordinator. 
      </p>
    </div>
  );
}