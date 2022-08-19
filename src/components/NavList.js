import React from 'react'

function NavList({closeMenu}) {
  return (
    <>
        <li className='nav-item'><a href="/" >Home</a></li>
        <li className='nav-item'><a href="#about" onClick={closeMenu}>About</a></li>
        <li className='nav-item'><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
        <li className='nav-item'><a href="#demo" onClick={closeMenu}>Demo</a></li>
    </>
  )
}

export default NavList