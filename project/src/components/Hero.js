import React from 'react';
import profileImage from '../assets/profile.JPG'; // Import the image file
import './Hero.css';
import mountains from '../assets/mountains.png'; 
import mountains2 from '../assets/mountains_front.png'; 
import stars from '../assets/stars.png'; 
import moon from '../assets/moon.png'; 

const Hero = () => {
  return (
    
    <div>
        <section id="home">

        <section className="hero-page">
        
            <header>
                <img src={mountains} className="background" />
                <img src={mountains2} className="foreground" />
                <img src={stars} className="background" />
                <img src={moon} className="foreground" />
                <h2 className="title">Kelsey Musolf</h2>
            </header>

            <section className="content">

                <div className="home-box">
                <div className="inner-left">
                    <div className="inner-inner-left">
                        <h2>Hello World!</h2>
                    </div>
                    <div className="inner-inner-left">
                        My name is Kelsey Musolf and I am a third year student at UC Riverside. I am a Computer Science with Business Applications major as well as a student-athlete on the women's D1 soccer team. 
                    </div>

                    <div className='inner-inner-left-resume'>
                        <a href="https://www.flipsnack.com/A7FBF6BBDC9/kelsey_musolf_resume/full-view.html" target="_blank"  rel="noopener noreferrer" className='resume'>View My Resume (PDF)</a>
                    </div>
                </div>

                <div className="inner-right">
                    <img src={profileImage} className="image-frame" alt="Profile" /> 
                </div>

            </div>

            </section>

            <div className='about-me'>
                <div className='me'>
                        Hi there! I'm Kelsey, a driven student-athlete passionate about pursuing a career in software engineering. 
                        Currently seeking internship opportunities to expand my skills in software and contribute to innovative projects.

                </div>
                
                <div className='me'>
                    Originally from San Jose, California, I bring a vibrant energy and a can-do attitude to everything I do.
                    I thrive in collaborative environments and am eager to learn from seasoned professionals in the tech industry.
                </div>

                <div className='me'>
                    With a solid foundation in computer science coursework and hands-on projects, I'm well-equipped to tackle challenges and bring fresh perspectives to the table. 
                    My technical skills include coding in C++, Java, Python, JavaScript, and lots more! All my wonderful talents can be found under the 'Skills' page here on my website.
                </div>

                <div className='me'>
                    Outside of coding, you'll find me on the soccer field, where I've honed my teamwork, leadership, and problem-solving abilities. 
                    Whether it's on the pitch or behind a computer screen, I'm always up for a challenge and ready to make an impact.
                </div>

                <div className='me'>
                    Let's connect and explore how I can contribute to your team's success!
                </div>
                
            </div>


        </section>
        </section>
    </div>
  
  );
};

export default Hero;