import React from 'react';
import './Projects.css';
import laptop from '../assets/laptop.png'; 
import bytes from '../assets/bytes.jpg'; 
import tweet from '../assets/tweet.png'; 




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
                        <img src={bytes} className='project-img'/>
                    </div>
                </div>
                <div className="inner-right">
                    <h3>2023 - Present</h3>
                    <h3>Co-Founder</h3>
                    <p>College level Computer Science tutoring videos. <br/> <br/>
Topics include: Data Structures and Algorithms, Assembly language, Microarchitecture, and Discrete structures <br/> <br/>
Visual instruction on whiteboards for example walkthroughs, lectures, and definition videos 
</p>
                </div>
                
            </div>

            <div className="project">
                <div className="inner-left">
                    <div className="inner-upper-left">
                        <h2>Political Tweets Sentiment Analysis</h2>
                    </div>
                    <div className="inner-upper-left">
                        <img src={tweet} className='project-img'/>
                    </div>
                </div>
                <div className="inner-right">
                    <h3>Spring 2023</h3>
                    <h3>UC Riverside Student Project </h3>
<p>Utilized Pandas library in Python to pull sentiment analysis from tweets showing political views and the connotative use of words. <br/> <br/>
Analyzed Tweets from a database of 14,000 tweets in the years 2016 - 2020 to determine the positivity of each tweet and its sentiment towards related topics in politics.<br/> <br/>
Created a word cloud and presentation to visually show findings
                    </p>
                </div>
                
            </div>


        </section>
    </section>
    
  );
};

export default Projects;