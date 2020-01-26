import React from 'react'
import '../styles/Projects.scss'

const Projects = () => {
return(
<div className = 'projects-container'>
<div className = 'project-card'>
<h2>Handy-App </h2>
<h2>Full Stack Developer </h2>
<img className = 'project-img' src={require('../img/handy.png')}/>
<p>An application built to allow Homeowners to purchase the services of Contractors. A Homeowner can post a project along with pictures, details, and any other sort of desired information. A contractor can then make a bid on the project, and give any other information, such as material costs and ect. A time can be selected for the contractor to work on the project, and payment can be given from the customer directly to the the Contractor.</p>
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
