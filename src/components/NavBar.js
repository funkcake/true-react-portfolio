import React from 'react';
import Resume from './Resume';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
const NavBar = (props) => {
    return (
        <div class="container">
            <div class="btn-group">
                    <button class="btn btn-primary" onClick={() => props.setCurrentPage(<Contact/>)}>Contact</button>
                    <button class="btn btn-primary" onClick={() => props.setCurrentPage(<AboutMe/>)}>About Me</button>
                    <button class="btn btn-primary" onClick={() => props.setCurrentPage(<Portfolio/>)}>Portfolio</button>
                    <button class="btn btn-primary" onClick={() => props.setCurrentPage(<Resume/>)}>Resume</button>

            </div>
            
        </div>
        )
}
export default NavBar;