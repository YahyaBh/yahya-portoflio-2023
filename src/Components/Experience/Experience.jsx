import React from 'react'
import './Experience.scss'
import IMAGE from '../../Assets/yahya-logo.png'

const Experience = () => {
    return (
        <div className='experience_container' id="experience">



            <div className="head_text">
                <h2 className='main_text'>EXPERIENCE</h2>
                <h2 className='main_text_under'>EXPERIENCE</h2>
            </div>


            <div className="cards_container">


                <div className="card">
                    <div className='image-container'>
                        <img src={IMAGE} alt="experience2012" />
                    </div>

                    <div className="body">
                        <h3>COMPANY NAME</h3>

                        <p>Lorem Ipsum is Lorem Ipsum and is therefore the Lorem Ipsum object. Lorem Ipsum is a utility letter that is commonly used </p>
                    </div>
                </div>

                <div className="card">
                    <div className='image-container'>
                        <img src={IMAGE} alt="experience2012" />
                    </div>

                    <div className="body">
                        <h3>COMPANY NAME</h3>

                        <p>Lorem Ipsum is Lorem Ipsum and is therefore the Lorem Ipsum object. Lorem Ipsum is a utility letter that is commonly used </p>
                    </div>
                </div>

                <div className="card">
                    <div className='image-container'>
                        <img src={IMAGE} alt="experience2012" />
                    </div>

                    <div className="body">
                        <h3>COMPANY NAME</h3>

                        <p>Lorem Ipsum is Lorem Ipsum and is therefore the Lorem Ipsum object. Lorem Ipsum is a utility letter that is commonly used </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Experience