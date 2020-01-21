import React from 'react'
import '../styles/Projects.scss'

const Projects = () => {
return(
<div className = 'projects-container'>
<div className = 'project-card'>
<h2>Title: Handy-App </h2>
<h2>Role: Full Stack Developer </h2>
<img className = 'project-img' src={require('../img/handy.png')}/>
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Title: Brav </h2>
<h2>Role: Team Lead </h2>
<img className = 'project-img' src={require('../img/brav.png')} />
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Title: Grantlify </h2>
<h2>Role: Team Lead </h2>
<img className = 'project-img' src={require('../img/grantlify.png')} />
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Title: Labby </h2>
<h2>Role: Team Lead </h2>
<img />
<p>Description: </p>
</div>
</div>)
}

export default Projects
