import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Portfolio(props) {
    return ( 
        <div>
        {props.projects.map((projects) => {
        <div className="card" style="width: 18rem;">
        <img className="card-img-top" src={projects.img}></img>  
        <div className="card-body">
          <link href={projects.deployed} className="card-link">{projects.title}</link>
          <link href={projects.github} className="card-link"><FontAwesomeIcon icon="fa-brands fa-github" /></link>
        </div>
      </div>  
    })}
    </div>
    )
}