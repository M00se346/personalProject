import React from 'react';
import './Projects.css';
import me from '../assets/me.jpg'; 
import phone from '../assets/file.png'; 




const Contact = () => {
  return (

    <section id="contact">
        <div className='big-title-box'>
            <div className="title-box">
                <h2 className="title">Contact</h2>
                <img src={phone} className='phone-img'/>

            </div>
        </div>


        <section className="skillsContainer">
        <div className="contact-box">

            <div className="inner-left">
                <img src={me} className='project-img'/>
            </div>
            <div className="inner-right-contact">
                <h2>Let's Get in Touch!</h2> <br/>
                <h3>Email: </h3> Kelsey@musolf.net
                <h3>Phone:</h3> 408-477-5079 <br/>
                <h3>LinkedIn:</h3> <a href="https://www.linkedin.com/in/kelsey-musolf-508650224/" target="_blank"  rel="noopener noreferrer" className="linked-in">Kelsey_Musolf_LinkedIn</a>
                <h3>GitHub:</h3> <a href="https://github.com/M00se346" target="_blank"  rel="noopener noreferrer" className="linked-in">Kelsey_Musolf_GitHub</a>

            </div>
            
        </div>
        </section>


            

    </section>
            
   
  );
};

export default Contact;