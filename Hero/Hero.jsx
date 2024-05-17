import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
        <h1>Your Partner In Home Care</h1>
        <p>When it comes to your home, trust matters. At Merokee Services, we're more than just hired help,
        – we're your partner in creating a safe, comfortable, and functional living space.
         We understand the importance of quality work and clear communication,
          and we'll be with you every step of the way, ensuring your complete satisfaction.
          Let us take the worry out of home maintenance</p>
          <div className="hero-btns">
            <button className='hero-btn'>Get In Touch</button>
            <button className='hero-btn'>Explore Services</button>
        </div>
    </div>
  )
}

export default Hero