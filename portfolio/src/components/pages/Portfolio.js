import React from "react";
import Project from "./Project";
import wallot from '../assets/wallot.png';
import travelhub from '../assets/TravelHub.jpg';
import techblog from '../assets/TechBlog.png';
import texteditor from '../assets/TextEditor.png';
import weather from '../assets/WeatherApp.png';
import work from '../assets/WorkDay.png';
import step from '../assets/step.png';


function Portfolio() {

    const projects = [
      {
        id: 1,
        title: "WalLot",
        img: wallot,
        github: "https://github.com/samiyazaki/WalLot",
        deployed: "https://wallot.herokuapp.com/",
      },
      {
        id: 2,
        title: "Travel Hub",
        img: travelhub,
        github: "https://github.com/savitamanchanda/Travel-Hub",
        deployed: "https://savitamanchanda.github.io/Travel-Hub/",
      },
      {
        id: 3,
        title: "Tech Blog",
        img: techblog,
        github: "https://github.com/savitamanchanda/TechBlog",
        deployed: "https://ancient-taiga-05046.herokuapp.com/",
      },
      {
        id: 4,
        title: "Text Editor",
        img: texteditor,
        github: "https://github.com/savitamanchanda/PWA_TextEditor",
        deployed: "https://damp-taiga-91454.herokuapp.com/",
      },
      {
        id: 5,
        title: "Weather App",
        img: weather,
        github: "https://github.com/savitamanchanda/city_weather_app",
        deployed: "https://savitamanchanda.github.io/city_weather_app/",
      },
      {
        id: 6,
        title: "Step It Up",
        img: step,
        github: "https://github.com/analisegiobbi3/Step_IT_Up",
        deployed: "https://step-it-up.herokuapp.com/",
      },
    ];
  
return (
    <div>
<Project projects={projects} />
</div>
);
}

export default Portfolio;