import React from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import Banner from './Components/Banner'
import Projects from './Components/Projects'
function App() {
  return (
    <div className="App">
      <img src={require('./img/logo.png')} />
      <h2>Full Stack Web Developer</h2>
      <Navigation />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
