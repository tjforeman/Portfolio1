import React from 'react';
import './styles/App.scss';
import Navigation from './Components/Navigation'
import Banner from './Components/Banner'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <img src={require('./img/logo.png')} />
      <h2>Full Stack Web Developer</h2>
      <div className = 'icons' >
      <a href = 'https://www.github.com/tjforeman/'><FontAwesomeIcon className='icon1' icon={faGithub} size="3x" /></a> 
        <a href = 'https://www.linkedin.com/in/tylerforeman1/'><FontAwesomeIcon icon={faLinkedin} size="3x"  /></a>
        </div>
      <Navigation />
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
