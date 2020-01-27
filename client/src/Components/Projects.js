import React from 'react'
import '../styles/Projects.scss'

const Projects = () => {
return(
<div className = 'projects-container'>
<div className = 'project-card'>
<h2>Handy-App </h2>
<h5>Full Stack Developer | ReactJS, NodeJS, PostgresSQL, Auth0, Stripe Connect, Clouninary, Material-UI </h5>
<img className = 'project-img' src={require('../img/handy.png')}/>
<p>An application built to allow Homeowners to purchase the services of Contractors. A Homeowner can post a project along with pictures, details, and any other sort of desired information. A contractor can then make a bid on the project, and give any other information, such as material costs and ect. A time can be selected for the contractor to work on the project, and payment can be given from the customer directly to the the Contractor.</p>
</div>
<div className = 'project-card'>
<h2>Brav </h2>
<h5>Team Lead | AWS Lex, AWS RDS, AWS Lambda, AWS api gateway, AWS s3-bucket, PostgresSQL </h5>
<img className = 'project-img' src={require('../img/brav.png')} />
<p>Brav is a full stack web application centered around conflict management. It connects parties in conflict with licensed mediators, and can even handle referrals from local court systems. A user can create a case and search, and filter mediators based upon what they need. They can then choose to connect with a mediator and schedule sessions. They can upload documents for the mediator to review, and the mediator can upload documents for them to sign off app. Also licensed mediators in search of extra money can sign up to provide their services though the application. Sessions are scheduled one at a time and payment can be exchanged with Brav taking a small platform fee from the mediators hourly rate.
</p>
</div>
<div className = 'project-card'>
<h2>Grantlify </h2>
<h5>Team Lead | ReactJS, Nodejs, Firebase Authentication, PostgreSQL, Material-UI </h5>
<img className = 'project-img' src={require('../img/grantlify.png')} />
<p>Searching for grants can be a tough task. Grantlify attempts to take the pressure off of both grant seekers and grant providers by giving them a place to post and apply for grants. Grants can easily be searched for, and filtered based on a wide variety of options. Grant providers can post grants along with all of their requirements and information, and grant seekers can easily apply to them, either with a redirect or a quick questionnaire that gives the provider more information. Grant providers can even choose the applicant they like best, and approve them to receive the grant off app. </p>
</div>
<div className = 'project-card'>
<h2>Labby </h2>
<h5>Team Lead | AWS Lex, AWS RDS, AWS Lambda, AWS api gateway, AWS s3-bucket, PostgresSQL </h5>
<img className = 'project-img' src={require('../img/labby.png')}/>
<p>Labby is an application that sought to automate some of the processes for staff in the labs portion of the curriculum in Lambda School. It is able to take input data from students and attempts to sort them into teams based on a sorting algorithm. It takes variables such as student role, track, and time zone into consideration in order to try and create the most efficient labs teams. It also uses an AWS lexbot in order to take and store desired projects from students.</p>
</div>
</div>)
}

export default Projects
