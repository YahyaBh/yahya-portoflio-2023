import React from 'react'
import './About.scss'

const About = () => {
    return (
        <div className='about_cont'>

            <div className='main_cont'>
                <h2 className='main_text'>ABOUT ME</h2>
                <h2 className='main_text_under'>ABOUT ME</h2>
            </div>

            <div className='container_about_cont'>
                <div className='left_cont cont_about'>
                    <h2>WHO AM I</h2>

                    <p>
                        I've been asking myself the same question for a while , then I figured out that ,
                        I'm a Full Stack Developer with over 2+ years of front and back end experience ,
                        problem solving skill had always been a part of me ,
                        while creativity is the key of my success
                    </p>

                </div>



                <div className='right_cont cont_about'>
                    <h2>WHY I CHOOSED PROGRAMMING </h2>

                    <p>
                        In my entire life , since I was 11 years old ,
                        computers and technology was my dream career ,
                        it was my prioritized hobby until it started being what my life built on
                    </p>

                </div>


                <div className='left_cont cont_about'>

                    <h2>WHY HIRING ME</h2>

                    <p>
                        each person has his unique pros . I'm a social person that will be a big advantage to mix with any culture .
                        Taking responsibilities and being passionate in my personal tasks is prioritized.
                    </p>


                </div>
            </div>

        </div>
    )
}

export default About