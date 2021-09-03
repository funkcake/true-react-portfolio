import React from 'react';
import me from '../assets/me.jpeg'
import background from '../assets/portfolioBackground.jpeg'
const AboutMe = () => {
    return (
        <main>
            <img src={background} alt="" className="absolute object-cover w-full h-full"
            />
            <section className="relative grid grid-cols-2 pt-12 lg:pt-44 mx-auto">
            <p className=""><img className="pic" src={me} alt=""/></p>
            <h1 className="text-4xl md:text-9xl text-left align-text-bottom text-black-200 font-bold cursive leading-none lg:leading-snug">Brian Casto</h1>
            </section>
            <section className="relative flex w-6/12 justify-center content-center mx-auto font-bold">
            <h4>Welcome to my portfolio. I am exited to get to work and ready to help make your dreams become my code. Some of the coding languages that are familiar to me are java, html, javascript, c++, c#, and python. Entering into coding has always been something I have wanted to do. Playing around with code since my high school day's making calculators and simple games. To making websites and apps that can help make peoples lives better.</h4>
            </section>
        </main>
        )
}
export default AboutMe;