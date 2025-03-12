import React, {useEffect} from 'react';
import './Interests.css';
import heart from '../assets/heart.png'; 
import dash from '../interests-pics/dash.png'; 
import gracie from '../interests-pics/gracie.png'; 
import swe from '../interests-pics/swe.JPG'; 
import saac1 from '../interests-pics/saac1.JPEG'; 
import saac2 from '../interests-pics/saac2.JPEG'; 
import soccer1 from '../interests-pics/soccer1.jpg'; 
import soccer2 from '../interests-pics/soccer2.JPG'; 
import tower from '../interests-pics/tower.JPG'; 
import pie from '../interests-pics/pie.JPG'; 
import cook from '../interests-pics/cook.JPG'; 
import beach1 from '../interests-pics/beach1.png'; 
import beach2 from '../interests-pics/beach2.png'; 
import saac3 from '../interests-pics/saac3.png'; 
import raa1 from '../interests-pics/raa1.png'; 







const Interests = () => {

    useEffect(() => {
        const items = document.querySelectorAll('.item');
        const colors = ['rgb(136, 74, 132)', 'rgb(77, 0, 75)', 'rgb(221, 165, 204)'];
    
        items.forEach(item => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          item.style.backgroundColor = randomColor;
        });
    }, []);



  return (
    <section id='interests'>
        
        <div className='big-title-box'>
            <div className="title-box">
                <h2 className="title">Interests</h2>
                <img src={heart} className='heart-img'/>
            </div>
        </div>
        


        {/* Masonry effect with flex boxes */}
        
        <section className="big-container">


            <section className='conatiner1'>
                <div className="item">
                    <div className='inner-item'>
                        <h3>SWE</h3>
                        I am a member of the club SWE, Society of Women in Engineering!<br/><br/>
                        I attended the SWE 2023 conference in LA, a chance to network and meet other women in the industry.
                    </div>
                    <div className='inner-item'>
                        <img src={swe} className='interest-img'/>
                    </div>
                </div>

                <div className="item">
                    <div className='inner-item'>
                        <h3>Cats 🐱</h3>
                        I have two cats at home, both are russian blues. <br/>
                        Shown below is Dash and then Gracie! <br/>
                    </div>
                    <div className='inner-item'>
                        <img src={dash} className='interest-img'/>
                    </div>
                    <div className='inner-item'>
                        <img src={gracie} className='interest-img'/>
                    </div>
                </div>

                <div className="item">
                    <div className='inner-item'>
                        <h3>Volunteering</h3>
                        <h4>Huntington Beach Clean-up</h4>
                        2025-Present
                        <br/> <br/>
                        <div className='inner-item'>
                            <img src={beach1} className='interest-img'/>
                        </div>
                        <div className='inner-item'>
                            <img src={beach2} className='interest-img'/>
                        </div>
                        <br/>
                        
                   </div>
                </div>

            </section>

{/* ========================================== */}

            <section className='conatiner1'>
                <div className="item">
                <div className='inner-item'>
                        <h3>French 🇫🇷</h3>
                        I've been taking French classes for over 6 years now. I am proficient at conversational French along with reading and writing!
                        <br/><br/>
                        I hope to have the chance to work and live in France as an opportunity to test my skills and live someplace new.
                    </div>
                </div>

                <div className="item">
                    <div className='inner-item'>
                        <h3>UCR Womens Soccer</h3>
                        I am on the UCR Womens D1 soccer team.<br/><br/>
                        I grew up playing center back and switched to wing-forward here at UCR!
                    </div>
                    <div className='inner-item'>
                        <img src={soccer1} className='interest-img'/>
                    </div>
                    <div className='inner-item'>
                        <img src={soccer2} className='interest-img'/>
                    </div>
                </div>

                <div className="item">
                    <div className='inner-item'>
                        <h3>UCR Belltower </h3>
                        I am absolutely in love with the UCR campus!
                    </div>
                    <div className='inner-item'>
                        <img src={tower} className='interest-img'/>
                    </div>
                </div>

                <div className="item">
                    <div className='inner-item'>
                    <h3>Volunteering</h3>
                        <h4>Read Across America</h4>
                        2025 
                        <br/> <br/>

                        <div className='inner-item'>
                            <img src={raa1} className='interest-img'/>
                        </div>
                        <br/>
                    </div>
                </div>

            </section>

{/* ========================================== */}


            <section className='conatiner1'>
                <div className="item">
                    <div className='inner-item'>
                        <h3>President of SAAC ⚽️</h3>
                        2023-2025
                        <br/><br/>
                            I am the president of the Student Athletic Advisory Committee for UC Riverside Athletics. <br/><br/>
                            Led a team of 25+ student-athletes to plan 3-5 events yearly focusing on community, campus, athlete connection. <br/><br/>
                            Monthly meetings to connect UCR with Big West Conference; Changes to conference level competition and legal input prior to any Big West Conference changes. <br/><br/>
                            Teach athletes community, leadership skills, and inclusivity. <br/><br/>
                            Below are some past events hosted by SAAC.
                    </div>
                    <div className='inner-item'>
                        <img src={saac3} className='interest-img'/>
                    </div>
                    <div className='inner-item'>
                        <img src={saac1} className='interest-img'/>
                    </div>
                    <div className='inner-item'>
                        <img src={saac2} className='interest-img'/>
                    </div>
                </div>
                <div className="item">
                    <div className='inner-item'>
                        <h3>Cooking</h3>
                        Cooking is one of my favorite hobbies, I love to try new recipes and family favorites. <br/><br/>
                        Below is my mom's chicken pot pie recipe that I made, followed by Ratatouille. 
                    </div>
                    <div className='inner-item'>
                        <img src={pie} className='interest-img'/>
                    </div>
                    <div className='inner-item'>
                        <img src={cook} className='interest-img'/>
                    </div>
                </div>
            </section>

{/* ========================================== */}
            
        </section>
        


    </section>
  );
};

export default Interests;