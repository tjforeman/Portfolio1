import React from 'react'
import '../styles/Banner.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
return(
    <div className = 'banner-container' >
        <div className = 'about'>
            {/* <h5>About me </h5> */}
             <p>My name is Tyler Foreman. I enjoy working on scalable web applications. I'm comfortable working on any aspect of a web application. I currently live in Charlotte, North Carolina but am willing to relocate anywhere. I find working on world class product teams very enjoyable, and would like to someday help build a popular product for users to enjoy. </p>
        
        <img className='profile-pic' src={require('../img/profle_pic.jpg')}  />
        {/* <a href = 'https://www.github.com/tjforeman/'><FontAwesomeIcon className='icon1' icon={faGithub} size="3x" /></a> 
        <a href = 'https://www.linkedin.com/in/tylerforeman1/'><FontAwesomeIcon icon={faLinkedin} size="3x"  /></a> */}
        </div>
    </div>
)
}

export default Banner