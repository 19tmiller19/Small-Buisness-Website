import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Merokee_Logo_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={Logo} alt='merokee logo'/>
            <h1>Merokee Home Services</h1>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='#services'>Services</a></li>
                <li> <a href='/'>Portfolio</a></li>
                <li><a href='#reviews'>Reviews</a></li>
                <li><a href='#about'>About</a></li>
            </ul>
        </div>
        <div className="navbar-right">
            <button>Contact</button>
        </div>
    </div>
  )
}

export default Navbar