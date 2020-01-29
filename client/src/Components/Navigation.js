import React from 'react'
import '../styles/Navigation.scss'
import { Link} from 'react-scroll'

const Navigation = () => {
    return(
        <div className='nav-wrapper'>
        <a><Link activeClass="active" className="about-me" to="about-me" spy={true} smooth={true} duration={500} >About Me</Link></a>
        <a><Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={500} >Projects</Link></a>
        <a><Link activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} >Contact</Link></a>

        </div>
    )
}


export default Navigation