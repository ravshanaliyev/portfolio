import React from 'react'
import './Hero.css'
import HeroImg from '../../assets/images/hero.webp'
import ReactImg from '../../assets/images/react.png'
import JSImg from '../../assets/images/js.png'
import NextImg from '../../assets/images/nextj.png'
import TypeImg from '../../assets/images/image.png'
const Hero = () => {
    return (
        <section className='hero-container'>
            <div className="hero-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src={ReactImg} alt="" />
                    </div>
                    <img src={HeroImg} alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src={JSImg} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={NextImg} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={TypeImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero