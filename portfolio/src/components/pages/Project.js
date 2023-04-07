import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Project(props) {
  console.log(props);
    return ( 
        <div>
             {props.projects.map((item) => {
          return (
           
        <div className="card" key={item.id}>
        <img className="card-img-top" src={item.img} alt=''></img>  
          <a href={item.deployed} className="card-link">{item.title}</a>
          <a href={item.github} className="card-link"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
      </div> 
          )})}
    </div>
    )
}