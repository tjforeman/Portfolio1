import React from 'react';
import './styles/App.scss';
import Navigation from './Components/Navigation'
import Banner from './Components/Banner'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import mixpanel from './Helpers/mixpanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  mixpanel.track("Viewed portfolio")
  return (
    <div className="App">
      <img className = 'logo' src={require('./img/logo.png')} />
      <h2>Full Stack Web Developer</h2>
      <div className = 'icons' >
      <a href = 'https://www.github.com/tjforeman/'><FontAwesomeIcon className='icon1' icon={faGithub} size="3x" /></a> 
        <a href = 'https://www.linkedin.com/in/tylerforeman1/'><FontAwesomeIcon icon={faLinkedin} size="3x"  /></a>
        </div>
      <div className = 'component-wrapper'>
      <Navigation />
      <Banner />
      <Projects />
      <Skills />
      <Contact />
      </div>
    </div>
  );
}

export default App;
