import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Portfolio(props) {
    return ( 
        <div>
        {props.projects.map((projects) => {
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src={projects.img}></img>  
        <div class="card-body">
          <a href={projects.deployed} class="card-link">{projects.title}</a>
          <a href={projects.github} class="card-link"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
        </div>
      </div>  
    })}
    </div>
    )
}