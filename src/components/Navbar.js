import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import logo from "./images/logo.png"
import "./Navbar.css"
import NavList from './NavList'

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    
  return (
    <div className='header'>
        <nav className="navbar">
            <a href="/" className='logo'><img src={logo} alt="logo" /></a>
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={30} style={{color: "#fff"}} /> : <FaBars size={30} style={{color: "#fff"}}/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <NavList closeMenu={closeMenu}/>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar