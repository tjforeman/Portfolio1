import React from 'react'
import '../styles/Banner.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
return(
    <div className = 'banner-container' >
        <div className = 'about'>
             <p name="about-me" >My name is Tyler Foreman. I like working on scalable web applications. I'm comfortable working on any aspect of a web application. I currently live in Charlotte, North Carolina but am willing to relocate anywhere. I find working on world class product teams very enjoyable, and would like to someday help build a popular product for users to benefit from. </p>
        
        <img className='profile-pic' src={require('../img/profle_pic.jpg')}  />
        </div>
    </div>
)
}

export default Banner