import React from 'react';
import "../Style/Style.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";

const About = () => {
    return (
        <div className="bio">
            <h1>Hello, I am Kamshat. I am passionate web-developer</h1>
            <a href="https://www.linkedin.com/in/kamshat-mussina-97177b61/"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://github.com/MussinaKama"><FontAwesomeIcon icon={faGithubSquare}/></a>
            <a href={process.env.PUBLIC_URL + "/cv/cv_MussinaK.pdf"}>Resume</a>
        </div>
    )
}

export default About;