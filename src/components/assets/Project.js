import React from "react";
import Portfolio from '../pages/Portfolio'
import wallot from '../assets/wallot.png';
import travelhub from '../assets/TravelHub.jpg';
import techblog from '../assets/TechBlog.png';
import texteditor from '../assets/TextEditor.png';
import weather from '../assets/WeatherApp.png';
import work from '../assets/WorkDay.png'

export default function Project() {
    const projects = [
        {
        title: 'WalLot',
        img: wallot,
        github: 'https://github.com/samiyazaki/WalLot',
        deployed: 'https://wallot.herokuapp.com/',
        },
        {
        title: 'Travel Hub',
        img: travelhub,
        github: 'https://github.com/savitamanchanda/Travel-Hub',
        deployed: 'https://savitamanchanda.github.io/Travel-Hub/',   
        },
        {
        title: 'Tech Blog',
        img: techblog,
        github: 'https://github.com/savitamanchanda/TechBlog',
        deployed: 'https://ancient-taiga-05046.herokuapp.com/',   
        },
        {
        title: 'Text Editor',
        img: texteditor,
        github: 'https://github.com/savitamanchanda/PWA_TextEditor',
        deployed: 'https://damp-taiga-91454.herokuapp.com/',   
        },
        {
        title: 'Weather App',
        img: weather,
        github: 'https://github.com/savitamanchanda/city_weather_app',
        deployed: 'https://savitamanchanda.github.io/city_weather_app/',   
        },
        {
        title: 'Work Day Planner',
        img: work,
        github: 'https://github.com/savitamanchanda/work-day-planner',
        deployed: 'https://savitamanchanda.github.io/work-day-planner/',   
        },
    ]

    return (
        <div>
            <Portfolio projects={projects} />
        </div>
    )
}