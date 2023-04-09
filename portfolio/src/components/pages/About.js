import React from 'react';
import me from '../../components/assets/me.jpg';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <h2>SAVITA   MANCHANDA</h2>
      <img src={me} alt='' className='me'></img>
      <p>
        Welcome to my portfolio! I am an aspiring software developer. I currently work full time
        in Quality Assurance as a Post Development Testing Coordinator. 
      </p>
    </div>
  );
}