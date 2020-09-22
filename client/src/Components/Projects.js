import React from "react";
import mixpanel from "../Helpers/mixpanel";
import "../styles/Projects.scss";

const Projects = () => {
  const viewedHandyApp = () => {
    mixpanel.track("Viewed Handy-App");
  };
  const viwedBrav = () => {
    mixpanel.track("Viewed Brav");
  };
  const viewedGrantlify = () => {
    mixpanel.track("Viewed Grantlify");
  };
  const viewedLabby = () => {
    mixpanel.track("Viewed Labby");
  };
  return (
    <div name="projects" className="projects-container">
      <p className="project-title">My Projects</p>
      <div className="line-1">
        <div className="project-card">
          <h2>
            Handy-App - Connecting contractors and homeowners to get work done.{" "}
          </h2>
          <p>
            ReactJS, NodeJS, Redux, PostgresSQL, Auth0, Stripe Connect,
            Clouninary, Material-UI
          </p>
          <img
            className="project-img"
            alt="handy-app"
            src={require("../img/handy.png")}
          />
          <div className="links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://handyapp.netlify.com/"
              onClick={viewedHandyApp}
            >
              See the Product
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/labs13-handy-app"
              onClick={viewedHandyApp}
            >
              See the Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <h2>
            Brav - Connecting mediators and customers to manage conflict.{" "}
          </h2>
          <p>
            ReactJS, NodeJS, Stripe Connect, PostgresSQL, Firebase Auth and
            Storage, Material-UI
          </p>
          <img
            className="project-img"
            alt="brav"
            src={require("../img/brav.png")}
          />
          <div className="links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.beabravone.com/"
              onClick={viwedBrav}
            >
              See the Product
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/labs14-brav"
              onClick={viwedBrav}
            >
              See the Code
            </a>
          </div>
        </div>
      </div>
      <div className="line-2">
        <div className="project-card">
          <h2>
            Grantlify - Creating a place for grant seekers, and givers to
            collaborate{" "}
          </h2>
          <p>
            {" "}
            ReactJS, Nodejs, Firebase Authentication, PostgreSQL, Material-UI{" "}
          </p>
          <img
            className="project-img"
            alt="grantlify"
            src={require("../img/grantlify.png")}
          />
          <div className="links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.grantlify.com/"
              onClick={viewedGrantlify}
            >
              See the Product
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/tjforeman/startup-grant-database-pt5-fe"
              onClick={viewedGrantlify}
            >
              {" "}
              See the Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <h2>Labby - Automating the creation of teams for Lambda Labs </h2>
          <p>
            AWS Lex, AWS RDS, AWS Lambda, AWS api gateway, AWS s3-bucket,
            PostgresSQL
          </p>
          <img
            className="project-img"
            alt="labby"
            src={require("../img/labby.png")}
          />
          <div className="links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://lambdalabby.com/"
              onClick={viewedLabby}
            >
              {" "}
              See the Product
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Lambda-School-Labs/labby-be"
              onClick={viewedLabby}
            >
              See the Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
