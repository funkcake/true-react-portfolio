import React from 'react';
import background from '../assets/portfolioBackground.jpeg'
const Contact = () => {
    return (
        <main>
        <img src={background} alt="" className="absolute object-cover w-full h-full"
            />
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <div>
            Contact<br></br>
            Email: castobrianj@gmail.com<br></br>
            Phone: 210-269-1705<br></br>
            <a href="https://www.linkedin.com/in/brian-casto-9416b3204/">My Linkedin</a><br></br>
        </div>
        </section>
        </main>
        )
}
export default Contact;