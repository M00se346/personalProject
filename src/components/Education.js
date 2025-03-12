import React from 'react';
import './Education.css';
import pencil from '../assets/pencil.png'; 
import gear from '../assets/gear1.png'; 




const Education = () => {
  return (
   <section id="education">
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
                <p>Undergraduate Degree </p>
                <p>Graduation date: 2021-2025 </p>
                <p>GPA: 3.89 </p>
                <h2>University of California, Riverisde</h2>
                <h3>Computer Science</h3>
                <p>Graduate Degree </p>
                <p>Graduation date: 2025-2026 (expected)</p>
               
            </div>
            <div className="box-right">
                <h2>Relevant Courses</h2>
                <p>Data Structures and Algorithms <br/> Assembly language <br/> Micro-architecture <br/> Databases <br/> Discrete structures <br/> Web Development <br/> Embedded Systems </p>
                <h2>Student-Athlete </h2> 
                <h3>D1 Women's Soccer</h3>
            </div>

        </section>

    </section>
    </section>
   
  );
};

export default Education;