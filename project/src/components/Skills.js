import React from 'react';
import './Education.css';
import gear from '../assets/gear1.png'; 




const Skills = () => {
  return (
   
    <section id="skills">

        <div className="big-title-box">
            <div className="title-box">
                <h2 className="title">Skills</h2>
                <img src={gear} className="skills-img"/>
            </div>
        </div>

        <section className="skillsContainer">
            <div className="skill">
                <h2>Skills</h2>
                <p>Java</p>
                <p>C++</p>
            </div>
        </section>



    </section>
   
  );
};

export default Skills;