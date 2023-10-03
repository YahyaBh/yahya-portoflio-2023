import React, { useState } from 'react'
import './Skills.scss'
import { AiOutlineHtml5 } from 'react-icons/ai'

const Skills = () => {

    const [skill, setSkill] = useState('');




    const handleSkill = (e) => {
        if (skill === e) {
            setSkill('')
        } else {
            setSkill(e)
        }
    }

    return (
        <div className='skills_container' id="skills">

            <div className="container">

                <div className="head_text">
                    <h2 className='main_text'>TECHNOLOGIES & SKILLS</h2>
                    <h2 className='main_text_under'>TECHNOLOGIES & SKILLS</h2>
                </div>



                <div className="skills">

                    <div onClick={e => handleSkill('html')} className={`skill_container ${skill === 'html' ? 'active' : ''}`}>

                        <div className="cycle_container">
                            <AiOutlineHtml5 />
                        </div>

                        <div className="body_container">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit in fac  et non proident in id adip   euismod en         iaculis
                            </p>
                        </div>

                    </div>


                </div>



                <div className="text_bottom">
                    <p>Having all those without soft-skills or problem skills is useless <br /> that's why I focus on practical side more than knowledge</p>
                </div>
            </div>



        </div>
    )
}

export default Skills