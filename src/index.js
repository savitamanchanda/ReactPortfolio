import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/sharp-solid-svg-icons'


library.add( faLinkedinIn, faGithub, faEnvelope )


ReactDOM.render(<App />, document.getElementById('root'));