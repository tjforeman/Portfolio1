import React from 'react'
import '../styles/skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode,faReact,faJs,faPython,faGit } from '@fortawesome/free-brands-svg-icons'


const Skills = () => {
return(
    <div className ='skills-container' >
    <div className = 'skill-title'>
    <p>My Skills</p>
    <div className = 'icons'>
    <div className = 'icon-card'>
    <FontAwesomeIcon className='js' icon={faJs} size="8x" color = 'black'/>
    <p>JavaScript</p>
    </div>
    <div className = 'icon-card'>
    <FontAwesomeIcon className='icon1' icon={faPython} size="8x" color = 'black'/>
    <p>Python</p>
    </div>
    <div className = 'icon-card'>
    <FontAwesomeIcon className='icon1' icon={faNode} size="8x" color = 'black'/>
    <p>Node</p>
    </div>
    <div className = 'icon-card'>
    <FontAwesomeIcon className='icon1' icon={faReact} size="8x" color = 'black'/>
    <p>React</p>
    </div>
    <div className = 'icon-card'>
    <FontAwesomeIcon className='icon1' icon={faGit} size="8x" color = 'black'/>
    <p>Git</p>
    </div>
    </div>
    </div>
    </div>
)
}

export default Skills