import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Project.css';

export default function Project(props) {
  console.log(props);
    return ( 
        <div className="p-grid">
             {props.projects.map((item) => {
          return (
           
        <div className="card p-grid-item" key={item.id}>
        <img className="p-image" src={item.img} alt=''></img>  
          <a href={item.deployed} className="card-link">{item.title}</a>
          <a href={item.github} className="card-link"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
      </div> 
          )})}
    </div>
    )
}