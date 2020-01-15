import React from 'react'
import '../styles/Banner.css'
// import profile_pic from '../img/profile_pic'

const Banner = () => {
return(
    <div className = 'banner-container' >
        <div>
        <img className='profile-pic' src={require('../img/profle_pic.jpg')}  />
        </div>
        <div>
        <h1>Tyler Foreman</h1>
        <h1>Full Stack Web Developer</h1>
        <h2>Charlotte NC</h2>
        <p>My name is Tyler Foreman. I enjoy working on scalable web applications. I'm comfortable working on any aspect of a web application. I currently live in Charlotte, North Carolina but am willing to relocate anywhere. I find working on world class product teams very fun, and would like to someday help build a popular product for users to enjoy. </p>
        </div>
    </div>
)
}

export default Banner