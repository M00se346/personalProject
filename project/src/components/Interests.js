import React, {useEffect} from 'react';
import './Interests.css';
import heart from '../assets/heart.png'; 
import dash from '../assets/dash.png'; 


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
                        <h3>Cats 🐱</h3>
                        I have two cats at home, both are russian blues. <br/>
                        Shown below is Dash! <br/>
                    </div>
                    <div className='inner-item'>
                        <img src={dash} className='dash-img'/>
                    </div>
                </div>

                <div className="item">
                    SOMETHING
                    blah <br/>
                    blah blah ASDFGHJKSDFGHJK AFSFGH SFG SRGHERGJBW SFJHVBWOUW VSOUYVGNWUTYVWO VOUWYGFV OUWE FUOEGVOJSHV UYSGFVJKS TJS OEFVGSDUHBFV LSJGH OUSYFVH SJDFBV OWRGTVN SODUYFBV OSDJBHG ISDUCHVOSUBF VLJSBFV
                    blah ASDFGHJKSDFGHJK AFSFGH SFG SRGHERGJBW SFJHVBWOUW VSOUYVGNWUTYVWO VOUWYGFV OUWE FUOEGVOJSHV UYSGFVJKS TJS OEFVGSDUHBFV LSJGH OUSYFVH SJDFBV OWRGTVN SODUYFBV OSDJBHG ISDUCHVOSUBF VLJSBFV

                </div>

            </section>

{/* ========================================== */}

            <section className='conatiner1'>
                <div className="item">
                    school
                    blah <br/>
                    blah ASDFGHJKSDFGHJK AFSFGH SFG SRGHERGJBW SFJHVBWOUW VSOUYVGNWUTYVWO VOUWYGFV OUWE FUOEGVOJSHV UYSGFVJKS TJS OEFVGSDUHBFV LSJGH OUSYFVH SJDFBV OWRGTVN SODUYFBV OSDJBHG ISDUCHVOSUBF VLJSBFV
                </div>
            </section>

{/* ========================================== */}


            <section className='conatiner1'>
                <div className="item">
                    SOMETHING
                    blah <br/>
                    blah     blah ASDFGHJKSDFGHJK AFSFGH SFG SRGHERGJBW SFJHVBWOUW VSOUYVGNWUTYVWO VOUWYGFV OUWE FUOEGVOJSHV UYSGFVJKS TJS OEFVGSDUHBFV LSJGH OUSYFVH SJDFBV OWRGTVN SODUYFBV OSDJBHG ISDUCHVOSUBF VLJSBFV
                    blah ASDFGHJKSDFGHJK AFSFGH SFG SRGHERGJBW SFJHVBWOUW VSOUYVGNWUTYVWO VOUWYGFV OUWE FUOEGVOJSHV UYSGFVJKS TJS OEFVGSDUHBFV LSJGH OUSYFVH SJDFBV OWRGTVN SODUYFBV OSDJBHG ISDUCHVOSUBF VLJSBFV

                </div>
                <div className="item">
                    SOMETHING
                    blah <br/>
                    blah     blah ASDFGHJKSDFGHJK AFSFGH SFG SRGHERGJBW SFJHVBWOUW VSOUYVGNWUTYVWO VOUWYGFV OUWE FUOEGVOJSHV UYSGFVJKS TJS OEFVGSDUHBFV LSJGH OUSYFVH SJDFBV OWRGTVN SODUYFBV OSDJBHG ISDUCHVOSUBF VLJSBFV
                    blah ASDFGHJKSDFGHJK AFSFGH SFG SRGHERGJBW SFJHVBWOUW VSOUYVGNWUTYVWO VOUWYGFV OUWE FUOEGVOJSHV UYSGFVJKS TJS OEFVGSDUHBFV LSJGH OUSYFVH SJDFBV OWRGTVN SODUYFBV OSDJBHG ISDUCHVOSUBF VLJSBFV

                </div>
            </section>

{/* ========================================== */}
            
        </section>
        


    </section>
  );
};

export default Interests;