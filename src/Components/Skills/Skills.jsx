import React, { useEffect, useState } from 'react'
import './Skills.scss'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { urlFor, client } from '../../Client';

const Skills = () => {

    const [skill, setSkill] = useState('');

    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);


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

                    {skills.map((skill, index) => (
                        <div key={index} onClick={e => handleSkill(skill.name)} className={`skill_container ${skill === skill.name ? 'active' : ''}`}>

                            <div className="cycle_container">
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>

                            <div className="body_container">
                                <p>
                                    {skill.desc}
                                </p>
                            </div>

                        </div>
                    ))}



                </div>



                <div className="text_bottom">
                    <p>Having all those without soft-skills or problem skills is useless <br /> that's why I focus on practical side more than knowledge</p>
                </div>
            </div>



        </div>
    )
}

export default Skills