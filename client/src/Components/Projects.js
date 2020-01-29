import React from 'react'
import '../styles/Projects.scss'

const Projects = () => {
return(
<div name='projects' className = 'projects-container'>
<div className = 'line-1'>
<div className = 'project-card'>
<h2>Handy-App - Connecting contractors and homeowners to get work done. </h2>
<h5>Full Stack Developer</h5>
<p>ReactJS, NodeJS, Redux, PostgresSQL, Auth0, Stripe Connect, Clouninary, Material-UI</p>
<img className = 'project-img' src={require('../img/handy.png')}/>
<button>See the Product</button>
<button>See the Code</button>
</div>
<div className = 'project-card'>
<h2>Brav - Connecting mediators and customers to manage conflict. </h2>
<h5>Team Lead </h5>
<p>
ReactJS, NodeJS, Stripe Connect, PostgresSQL, Firebase Auth and Storage, Material-UI
</p>
<img className = 'project-img' src={require('../img/brav.png')} />
<button>See the Product</button>
<button>See the Code</button>
</div>
</div>
<div className = 'line-2'>
<div className = 'project-card'>
<h2>Grantlify - Creating a place for grant seekers, and givers to collaborate </h2>
<h5>Team Lead</h5>
<p> ReactJS, Nodejs, Firebase Authentication, PostgreSQL, Material-UI </p>
<img className = 'project-img' src={require('../img/grantlify.png')} />
<button>See the Product</button>
<button>See the Code</button>
</div>
<div className = 'project-card'>
<h2>Labby - Automating the creation of teams for Lambda Labs </h2>
<h5>Team Lead</h5>
<p>AWS Lex, AWS RDS, AWS Lambda, AWS api gateway, AWS s3-bucket, PostgresSQL</p>
<img className = 'project-img' src={require('../img/labby.png')}/>
<button>See the Product</button>
<button>See the Code</button>
</div>
</div>
</div>)
}

export default Projects
