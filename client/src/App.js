import React from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import Banner from './Components/Banner'
import Projects from './Components/Projects'
function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
