import React from 'react';
import me from '../assets/me.jpeg'
const AboutMe = () => {
    return (
        <div>
            <h1><img className="photo" src={me} alt=""/>Brian Casto</h1><br></br>
            <p class="container">Welcome to my portfolio. I am exited to get to work and ready to help make your dreams become my code. Some of the coding languages that are familiar to me are java, html, javascript, c++, c#, and python. Entering into coding has always been something I have wanted to do. Playing around with code since my high school day's making calculators and simple games. To making websites and apps that can help make peoples lives better.</p>
        </div>
        )
}
export default AboutMe;