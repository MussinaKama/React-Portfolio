import React from 'react';
import "../Style/Style.scss";

const About = () => {
    return (
        <div className="bio">
            <h1>Hello, I am Kamshat. I am passionate web-developer</h1>
            <a href="https://www.linkedin.com/in/kamshat-mussina-97177b61/">LinkedIn</a>
            <a href="https://github.com/MussinaKama">Github</a>
            <a href={process.env.PUBLIC_URL + "/cv/cv_MussinaK.pdf"}>Resume</a>
        </div>
    )
}

export default About;