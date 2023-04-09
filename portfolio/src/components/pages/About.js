import React from 'react';
import me from '../../components/assets/me.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <div>
      <h1>ABOUT ME</h1>
      <img src={me} alt='' className='me'></img>
      <p className='intro'>
      Welcome to my portfolio! My name is Savita Manchanda, and I hold a Bachelor's degree in Mechanical Engineering. After graduation, I landed a full-time job in Quality Assurance as a Post-Development Testing Coordinator at SEI Investments.

However, my interests didn't stop there. I've always been fascinated by the world of technology and software development. To further pursue this passion, I'm currently enrolled in a part-time Full Stack Web Development Bootcamp at Columbia University. Through this program, I've gained hands-on experience in coding languages such as HTML, CSS, JavaScript, and React, and I'm eager to keep learning and expanding my skillset.

My experience in both mechanical engineering and software development has taught me how to approach complex problems with a holistic perspective. With a keen eye for detail and an eagerness to learn, I'm excited to tackle new challenges and make meaningful contributions to the tech industry. Thank you for taking the time to visit my portfolio, and I look forward to connecting with you soon.
      </p>
    </div>
  );
}