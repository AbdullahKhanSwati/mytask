import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import icon from "../icon.png"
function Header() {
  return (
    <div className='flexContainer'>

<div className='flex1'>

<span className='font'> <img className='icon' src={icon} alt="Logo" />    mania</span>
</div>


<div className='flex2'>

    <NavLink to="/" className="item">Home</NavLink>
    <NavLink to="/Menu" className="item">Menu</NavLink>
    <NavLink to="/Coupen" className="item">Special&Coupens</NavLink>
    <NavLink to="/Contact" className="item">Contact Us</NavLink>
</div>


    </div>
  )
}

export default Header