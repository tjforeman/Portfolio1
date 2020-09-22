import React from "react";
import "../styles/Navigation.scss";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <Link
        activeClass="active"
        className="about-me"
        to="about-me"
        spy={true}
        smooth={true}
        duration={500}
      >
        About Me
      </Link>
      <Link
        activeClass="active"
        className="projects"
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
      >
        Projects
      </Link>

      <Link
        activeClass="active"
        className="contact"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navigation;
