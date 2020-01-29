import React from 'react'
import '../styles/Contact.scss'


const Contact = () => {
return(
    <div name = 'contact' className = 'contact-container'>
        <p>Contact Me</p>
        <div className = 'inputs'>
        <input className= 'one' placeholder = 'Enter your name'/>
        <input className = 'one' placeholder = 'Enter your Email'/>
        <input className = 'one' placeholder = 'Enter your message'/>
        </div>
        <div>
        <button>Submit</button>
        </div>
    </div>
)

}

export default Contact