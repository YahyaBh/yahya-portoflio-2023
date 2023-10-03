import React from 'react'
import Logo from '../../Assets/d.png'
import './Footer.scss'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer_contianer'>



            <p>
                THANK YOU FOR VISITING MY PORTFOLIO , IF YOU'RE HERE JUST TO TAKE A LOOK
                YOU MAY SEND ME YOUR FEEDBACK OR OPINION IN THE HIRE ME SECTION OR SEND ME  A MESSAGE IN THE EMAIL DIRECTLY
            </p>

            <div className="container_bottom">
                <img src={Logo} alt="logo" />

                <div className="navigate">
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >CONTACT</Link>
                    <Link to="skills" spy={true} smooth={true} offset={50} duration={500} >SKILLS</Link>
                    <Link to="experience" spy={true} smooth={true} offset={50} duration={500} >EXPERIENCE</Link>
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500} >PROJECTS</Link>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} >ABOUT</Link>
                </div>
            </div>

            <div className="copyright">
                <p>All rights reserved to <span>WEBINA DIGITAL LTD</span></p>
            </div>

        </div>
    )
}

export default Footer