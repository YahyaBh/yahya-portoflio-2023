import React, { useState } from 'react'
import './About.scss'
import { BsPersonBadge } from 'react-icons/bs'
import { DiCode } from 'react-icons/di'
import { MdWorkOutline } from 'react-icons/md'
import ProfilePic from '../../Assets/Profile_pic.png'

const About = () => {


    const [about, setAbout] = useState();
    const [aboutEnabled, setAboutEnabled] = useState(false);




    const handleAbout = (e) => {
        if (aboutEnabled) {

            setAbout()
            setAboutEnabled(false);
        }
        else {
            setAbout(e)
            setAboutEnabled(true);

        }

    }

    return (
        <div className='about_cont' id="about">

            <div className='main_cont'>
                <h2 className='main_text'>ABOUT ME</h2>
                <h2 className='main_text_under'>ABOUT ME</h2>
            </div>


            <div className={`about_modal ${aboutEnabled ? '' : 'disabled'}`}>

                <div className='modal_container'>
                    <h2>{about === 'who' ? 'WHO AM I' : about === 'programming' ? 'WHY I CHOOSED PROGRAMMING' : 'WHY HIRING ME'}</h2>

                    <p>{about === 'who' ? "I've been asking myself the same question for a while , then I figured out that , I'm a Full Stack Developer with over 2+ years of front and back end experience , problem solving skill had always been a part of me ,while creativity is the key of my success" : about === 'programming' ? 'In my entire life , since I was 11 years old , computers and technology was my dream career , it was my prioritized hobby until it started being what my life built on' : "each person has his unique pros . I'm a social person that will be a big advantage to mix with any culture .Taking responsibilities and being passionate in my personal tasks is prioritized."}</p>

                    <button onClick={handleAbout}>GLAD TO KNOW THAT!</button>
                </div>


            </div>

            <div className='container_about_cont'>
                <div className='cont_about' onClick={e => handleAbout('who')}>

                    <div className='face_top'>
                        <div className="padd">

                            <BsPersonBadge />

                            <h2>WHO AM I</h2>
                        </div>
                    </div>


                </div>



                <div className='cont_about' onClick={e => handleAbout('programming')}>

                    <div className='face_top'>
                        <div className="padd">
                            <DiCode />

                            <h2>WHY I CHOOSED PROGRAMMING</h2>
                        </div>
                    </div>

                </div>

                <div className='cont_about' onClick={e => handleAbout('hiring')}>

                    <div className='face_top'>
                        <div className="padd">

                            <MdWorkOutline />

                            <h2>WHY HIRING ME</h2>
                        </div>
                    </div>

                </div>

            </div>


            <div className="container_w_pic">
                <div className="text_cont">
                    <h2>SUMMARY</h2>

                    <p>Yahya Bouhsine , Full stack developer with over 2+ years of practical experience , I've done many projects in front end and also back end , while enhancing my UI/UX Skills for more professionality in my work.</p>
                </div>

                <div className="pic_cont">
                    <img src={ProfilePic} alt="Yahya Bouhsine" />
                </div>
            </div>
        </div >

    )
}

export default About