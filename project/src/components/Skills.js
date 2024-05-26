import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Skills.css';
import gear from '../assets/gear1.png'; 




const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
   
    <section id="skills">

        <div className="big-title-box">
            <div className="title-box">
                <h2 className="title">Skills</h2>
                <img src={gear} className="skills-img"/>
            </div>
        </div>

        <Carousel responsive={responsive}>
            <div className='bubble'>
               <p>C++</p>
            </div>

            <div className='bubble'>
                <p>Java</p>
            </div>

            <div className='bubble'>
                <p>Python</p>
            </div>

            <div className='bubble'>
                <p>C</p>
            </div>

            <div className='bubble'>
                <p>MIPS</p>
            </div>

            <div className='bubble'>
                <p>JavaScript</p>
            </div>

            <div className='bubble'>
                <p>SQL</p>
            </div>

            <div className='bubble'>
                <p>HTML</p>
            </div>

            <div className='bubble'>
                <p>CSS</p>
            </div>
        </Carousel>



    </section>
   
  );
};

export default Skills;