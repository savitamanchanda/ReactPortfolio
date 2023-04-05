import React from "react";
import axios from 'axios';
import fileDownload from 'js-file-download';

export default function Portfolio() {
const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

return (
<div>
<div>
<button onClick={() => {this.handleDownload('./assets/Resume_example.pdf', 'resume.pdf')
}}>Download Resume</button>
</div>
<div>
<h3>Front End Proficiencies</h3>
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Javascript
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    React
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    AJAX
    <span class="badge badge-primary badge-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    APIs
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Bootstrap
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    JQuery
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul> 
<h3>Back End Proficiencies</h3>
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Node.js
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Express.js
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    GraphQL
    <span class="badge badge-primary badge-pill">1</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    MySQL
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Sequelize
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    MongoDB
    <span class="badge badge-primary badge-pill">1</span>
    </li>
    </ul>
</div>
</div>

)}