import React from 'react';
import me from '../../components/assets/me.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <div>
      <h1>ABOUT ME</h1>
      <img src={me} alt='' className='me'></img>
      <p className='intro'>
      Welcome to my portfolio! My name is Savita, and I am a recent graduate with a Bachelor's degree in Mechanical Engineering. 
      Since graduation, I have been working full-time in Quality Assurance as a Post-Development Testing Coordinator.
      </p>
      <p className='intro'>While I love working in QA, I also have a strong passion for software development. To pursue this interest further, I am currently enrolled in a part-time Full Stack Web Development Bootcamp at Columbia University. 
      Through this program, I am learning various programming languages, including HTML, CSS, JavaScript, and Node.js, and working on real-world projects to sharpen my skills.
      </p>
      <p className='intro'>
      My background in Mechanical Engineering has equipped me with a strong foundation in problem-solving, attention to detail, and critical thinking. 
      I am excited to apply these skills to software development and continue to grow as a Full-Stack Web Developer.
      </p>
      <p className='intro'>
      In this portfolio, you will find examples of my work in Web Development, showcasing my technical abilities and my dedication to producing high-quality work. 
      Thank you for taking the time to view my portfolio, and I look forward to connecting with you! 
      </p>

    </div>
  );
}