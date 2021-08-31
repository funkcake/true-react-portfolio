import React from 'react';
import background from '../assets/portfolioBackground.jpeg'
const Portfolio = () => {
    return (
        <main>
        <img src={background} alt="" className="absolute object-cover w-full h-full"
            />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <div>
            Projects<br></br>
            <a href="https://still-plains-06700.herokuapp.com/">REX-Rescue_Express</a><br></br>
            <a href="https://funkcake.github.io/Challenge-3/">Password Generator</a><br></br>
            
        </div>
        </section>
        </main>
        )
}
export default Portfolio;