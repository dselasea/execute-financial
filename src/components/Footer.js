import React from 'react'
import "./Footer.css"
import NavList from './NavList'

function Footer() {
    const year = new Date();
  return (
    <div className='footer'>
        <div className="container">
            <ul>
                <NavList />
            </ul>
            <div className="bottom">
                <span className="line"></span>
                <p>{year.getFullYear()} Execute, Inc. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer