import React from 'react';
import resume from '../assets/Resume.jpeg';
import resume2 from '../assets/Resume2.jpeg';
import background from '../assets/portfolioBackground.jpeg'
const Resume = () => {
    return (
        <main>
        <img src={background} alt="" className="absolute object-cover w-full h-full"
            />
        <section className="relative justify-center flex min-h-screen lg:pt-10">
            <div><img src={resume} alt=""/></div>
        </section>
        </main>
        )
}
export default Resume;