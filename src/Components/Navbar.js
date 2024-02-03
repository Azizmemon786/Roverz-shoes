import React from 'react'
import logo from '../Assets/Roverz-Logo 1.png'
import './navbar.css'
function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" />
        <nav>
            <ul>
                <li>Shops</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>About us</li>
            </ul>
        </nav>
        <div className="btn">
            <button>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
