import React from 'react';
import './Projects.css';
import laptop from '../assets/laptop.png'; 
import bytes from '../assets/bytes.jpg'; 



const Projects = () => {
  return (
   <section id="projects">
    <div className='big-title-box'>
        <div className="title-box">
            <h2 className="title">Projects</h2>
            <img src={laptop} className='laptop-img'/>
        </div>
    </div>


        <section className="skillsContainer">
            <div className="project">
                <div className="inner-left">
                    <div className="inner-upper-left">
                        <h2>Bytes University</h2>
                    </div>
                    <div className="inner-upper-left">
                        <img src={bytes} className='bytes-img'/>
                    </div>
                </div>
                <div className="inner-right">
                    <h3>Co-founder    &nbsp;&nbsp;      2023-Present</h3>
                    <p>College level Computer Science tutoring videos. <br/> <br/>
Topics include: Data Structures and Algorithms, Assembly language, Microarchitecture, and Discrete structures <br/> <br/>
Visual instruction on whiteboards for example walkthroughs, lectures, and definition videos 
</p>
                </div>
                
            </div>

            <div className="project">
                <div className="inner-left">
                    <div className="inner-upper-left">
                        <h1>This Website</h1>
                    </div>
                    <div className="inner-upper-left">
                        image goes here
                    </div>
                </div>
                <div className="inner-right">
                    <p>text describing project</p>
                </div>
                
            </div>

        </section>
    </section>
    
  );
};

export default Projects;