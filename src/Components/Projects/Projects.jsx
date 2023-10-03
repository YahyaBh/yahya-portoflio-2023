import React from 'react'
import './Projects.scss'
import ImageProject from '../../Assets/7058999_857.jpg'
import { AiOutlineCode } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

const Projects = () => {
    return (
        <div className='projects_container' id="projects">



            <div className="head_text">
                <h2 className='main_text'>PROJECTS</h2>
                <h2 className='main_text_under'>PROJECTS</h2>
            </div>


            <div className="cards_container">

                <div className="project_card">
                    <img src={ImageProject} alt="project" />

                    <div className="body_container">
                        <div className="card_body">
                            <h3>PROJECT TITLE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit in facilisis in fac</p>
                            <span>3 months of development</span>
                        </div>


                        <div className="show_container">

                            <div className="cont">
                                <h4>SHOW CODE</h4>
                                <AiOutlineCode title='show code' />
                            </div>

                            <div className="cont">
                                <h4>VISIT PROJECT</h4>
                                <CgWebsite title='visit project' />
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects