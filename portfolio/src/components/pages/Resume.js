import React from "react";
import MyPDF from '../assets/Resume_example.pdf';

export default function Portfolio() {

return (
<div>
<div>
<a href={MyPDF} download>Download Resume</a>
</div>
<div>
<h3>Front End Proficiencies</h3>
<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
   Javascript
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    React
    <span className="badge badge-primary badge-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    AJAX
    <span className="badge badge-primary badge-pill">1</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    APIs
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
   Bootstrap
    <span className="badge badge-primary badge-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    JQuery
    <span className="badge badge-primary badge-pill">1</span>
  </li>
</ul> 
<h3>Back End Proficiencies</h3>
<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
   Node.js
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Express.js
    <span className="badge badge-primary badge-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    GraphQL
    <span className="badge badge-primary badge-pill">1</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    MySQL
    <span className="badge badge-primary badge-pill">14</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
   Sequelize
    <span className="badge badge-primary badge-pill">2</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    MongoDB
    <span className="badge badge-primary badge-pill">1</span>
    </li>
    </ul>
</div>
</div>

)}