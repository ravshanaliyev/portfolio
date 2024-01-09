import React from 'react'
import './Navbar.css'
import { TbDeviceDesktopCode } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
    return (
        <>
            <div className='nav-wrapper'>
                <div className="nav-content">
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
                    <button class='menu-btn' onClick={() => { }}><MdMenu size={32} /></button>
                </div>
            </div>
        </>
    )
}

export default Navbar