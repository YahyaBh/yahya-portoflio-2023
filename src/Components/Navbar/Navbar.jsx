import React from 'react'
import './Navbar.scss'
import LogoDark from '../../Assets/yahya-logo.png'

const Navbar = () => {
    return (
        <div className='navbar_contianer'>

            <div className="master_contianer">

                <div className='left_container'>
                    <img src={LogoDark} alt="logo" />
                </div>

                <ul className='right_container'>
                    <li>Hire</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>About</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar