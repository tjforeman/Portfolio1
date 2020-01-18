import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
return(
<div className = 'projects-container'>
<div className = 'project-card'>
<h2>Role: </h2>
<h2>Title: </h2>
<img className = 'project-img' src={require('../img/handy.png')}/>
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Role: </h2>
<h2>Title: </h2>
<img className = 'project-img' src={require('../img/brav.png')} />
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Role: </h2>
<h2>Title: </h2>
<img className = 'project-img' src={require('../img/grantlify.png')} />
<p>Description: </p>
</div>
<div className = 'project-card'>
<h2>Role: </h2>
<h2>Title: </h2>
<img />
<p>Description: </p>
</div>
</div>)
}

export default Projects
