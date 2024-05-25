import React from 'react';
import './Education.css';
import pencil from '../assets/pencil.png'; 
import gear from '../assets/gear1.png'; 




const Education = () => {
  return (
   
    <section className="edu-page">
        
        <div className="big-title-box">
            <div className="title-box">
                <h2 className="title">Education</h2>
                <img src={pencil} className="edu-img"/>
            </div>
        </div>

        <section className="content">
            <div className="box-left">
                <h2>University of California, Riverisde</h2>
                <h3>Computer Science with Business Applications</h3>
                <p>Graduation date: 2021-2025 (expected)</p>
                <p>GPA: 3.88 </p>
                <p>Student-Athlete: D1 Women's Soccer </p>
            </div>
            <div className="box-right">
                <h2>Relevant Courses</h2>
                <p>Data Structures and Algorithms <br/> Assembly language <br/> Micro-architecture <br/> Databases <br/> Discrete structures <br/> Web Development</p>
            </div>

        </section>

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


    </section>
   
  );
};

export default Education;