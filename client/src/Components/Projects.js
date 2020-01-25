import React from 'react'
import '../styles/Projects.scss'

const Projects = () => {
return(
<div className = 'projects-container'>
<div className = 'project-card'>
<h2>Handy-App </h2>
<h2>Full Stack Developer </h2>
<img className = 'project-img' src={require('../img/handy.png')}/>
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Brav </h2>
<h2>Team Lead </h2>
<img className = 'project-img' src={require('../img/brav.png')} />
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Grantlify </h2>
<h2>Team Lead </h2>
<img className = 'project-img' src={require('../img/grantlify.png')} />
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Labby </h2>
<h2>Team Lead </h2>
<img className = 'project-img' src={require('../img/labby.png')}/>
<p>Description: </p>
</div>
</div>)
}

export default Projects
