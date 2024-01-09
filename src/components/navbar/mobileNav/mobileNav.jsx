import React from 'react'
import './mobileNav.css'
import { TbDeviceDesktopCode } from "react-icons/tb";

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <div className='logo-wrapper'>
                        <TbDeviceDesktopCode className='logo' size={40} />
                        <h3>frdevv17</h3>
                    </div>
                    <ul>
                        <li>
                            <a href="#" className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Work Experience</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Contact Me</a>
                        </li>
                        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav