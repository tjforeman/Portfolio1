import React from 'react'
import '../styles/Projects.scss'

const Projects = () => {
return(
<div name='projects' className = 'projects-container'>
<p className = 'project-title'>My Projects</p>
<div className = 'line-1'>
<div className = 'project-card'>
<h2>Handy-App - Connecting contractors and homeowners to get work done. </h2>
{/* <h5>Full Stack Developer</h5> */}
<p>ReactJS, NodeJS, Redux, PostgresSQL, Auth0, Stripe Connect, Clouninary, Material-UI</p>
<img className = 'project-img' src={require('../img/handy.png')}/>
<div className = 'links'>
<a href='https://handyapp.netlify.com/'>See the Product</a>
<a href = 'https://github.com/labs13-handy-app'>See the Code</a>
</div>
</div>
<div className = 'project-card'>
<h2>Brav - Connecting mediators and customers to manage conflict. </h2>
{/* <h5>Team Lead </h5> */}
<p>
ReactJS, NodeJS, Stripe Connect, PostgresSQL, Firebase Auth and Storage, Material-UI
</p>
<img className = 'project-img' src={require('../img/brav.png')} />
<div className = 'links'>
<a href = 'https://www.beabravone.com/'>See the Product</a>
<a href = 'https://github.com/labs14-brav'>See the Code</a>
</div>
</div>
</div>
<div className = 'line-2'>
<div className = 'project-card'>
<h2>Grantlify - Creating a place for grant seekers, and givers to collaborate </h2>
{/* <h5>Team Lead</h5> */}
<p> ReactJS, Nodejs, Firebase Authentication, PostgreSQL, Material-UI </p>
<img className = 'project-img' src={require('../img/grantlify.png')} />
<div className = 'links'>
<a href = 'https://www.grantlify.com/'>See the Product</a>
<a href = 'https://github.com/tjforeman/startup-grant-database-pt5-fe'> See the Code</a>
</div>
</div>
<div className = 'project-card'>
<h2>Labby - Automating the creation of teams for Lambda Labs </h2>
{/* <h5>Team Lead</h5> */}
<p>AWS Lex, AWS RDS, AWS Lambda, AWS api gateway, AWS s3-bucket, PostgresSQL</p>
<img className = 'project-img' src={require('../img/labby.png')}/>
<div className = 'links'>
<a href = 'https://lambdalabby.com/'>See the Product</a>
<a href = 'https://github.com/Lambda-School-Labs/labby-be'>See the Code</a>
</div>
</div>
</div>
</div>)
}

export default Projects
